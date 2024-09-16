"use client"
import CheckoutForm from '@/app/components/CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';

const PaymentPage = () => {
    const stripePromise = process.env.NEXT_PUBLIC_PUBLISH_KEY 
    ? loadStripe(process.env.NEXT_PUBLIC_PUBLISH_KEY)
    : null;

  if (!stripePromise) {
    return <div>Error: Stripe Public Key is not provided</div>;
  }
    return (
        <div>
               <div>
            <h3 className='text-3xl text-center'> Please pay to watch awesome courses</h3>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
        </div>
    );
};

export default PaymentPage;