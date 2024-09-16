"use client"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "./axios/axiosSecure";
import { useAuth } from "@/lib/AuthProvider";
import { Course } from "../types/courses.type";

// Define the type for user data returned by useAuth
type User = {
  email: string;
  name: string;
};

const CheckoutForm = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const axiosSecure = useAxiosSecure();
  const [error, setError] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string>('');
  const [transactionId, setTransactionId] = useState<string>('');
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth() as { user: User }; // Ensure that useAuth returns an object with user

  const totalPrice = courses.reduce((sum, course) => sum + course.price, 0);

  useEffect(() => {
    const fetchSelectedCourse = async () => {
      const response = await axiosSecure.get('/courses/selected');
      setCourses(response.data);
    };
    fetchSelectedCourse();
  }, [axiosSecure]);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure.post('/create-payment-intent', { price: totalPrice })
        .then(res => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

    if (paymentError) {
      console.log('payment error', paymentError);
      setError(paymentError?.message || 'Payment failed');
      return;
    }

    setError('');
    console.log('payment method', paymentMethod);

    // Confirm the payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.name || 'anonymous',
        },
      },
    });

    if (confirmError) {
      console.log('confirm error', confirmError);
      setError(confirmError?.message || 'Payment confirmation failed');
      return;
    }

    if (paymentIntent?.status === 'succeeded') {
      console.log('transaction id', paymentIntent.id);
      setTransactionId(paymentIntent.id);

      // Now save the payment in the database
      const payment = {
        email: user.email,
        price: totalPrice,
        transactionId: paymentIntent.id,
        date: new Date(),
        courseIds: courses.map(course => course._id),
        status: 'pending',
      };

      const res = await axiosSecure.post('/payments', payment);
      console.log('payment saved', res.data);

      if (res.data?.paymentResult?.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Thank you for the payment",
          showConfirmButton: false,
          timer: 1500,
        });
        // Redirect or perform any other actions here
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        className="mx-auto max-w-lg"
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-lg my-4 mx-auto" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && <p className="text-green-600"> Your transaction ID: {transactionId}</p>}
    </form>
  );
};

export default CheckoutForm;
