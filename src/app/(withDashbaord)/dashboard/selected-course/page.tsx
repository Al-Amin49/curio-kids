'use client';
import useAxiosSecure from '@/app/components/axios/axiosSecure';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import Swal from 'sweetalert2';

type Course = {
  _id: string;
  title: string;
  price: number;
  img: string;
};

const Selectedclasspage = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchSelectedCourse = async () => {
      const response = await axiosSecure.get('/courses/selected');
      setCourses(response.data);
    };
    fetchSelectedCourse();
  }, [axiosSecure]);

  const handlePay = (courseId: string) => {
    // Handle payment logic here
    console.log('Pay for course:', courseId);
  };
  const totalPrice=courses.reduce((sum, course)=>sum+course.price, 0)

  const handleDelete = (courseId: string) => {
    // SweetAlert confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Use DELETE method to remove the course
          await axiosSecure.delete(`/courses/remove/${courseId}`);

          // Update the local state to remove the course
          setCourses((prevCourses) => 
            prevCourses.filter((course) => course._id !== courseId)
          );

          // Show success message
          Swal.fire('Deleted!', 'Your course has been deleted.', 'success');
        } catch (error) {
          console.error('Error deleting course:', error);
          // Show error message
          Swal.fire({
            icon: 'error',
            title: 'Failed to delete the course',
            text: 'Please try again later.',
            showConfirmButton: true,
          });
        }
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
     {courses.length>0 && <h3 className="text-xl font-bold mb-4">Selected Courses</h3>}
      {courses.length === 0 ? (
        <div className="text-center flex flex-col items-center justify-center">
          <p className="text-lg font-semibold italic mb-4">No courses selected yet</p>
          <Image
            src="https://shorturl.at/4v2dI" // Replace with your GIF path
            alt="No courses"
            width={200}
            height={200}
            className="mx-auto"
          />
         <Link href="/courses"> <button className='btn btn-lg mt-4 flex items-center'> <BiArrowBack/> Back to Courses</button></Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border">Title</th>
                <th className="px-4 py-2 border">Price</th>
                <th className="px-4 py-2 border">Image</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course._id} className="text-center">
                  <td className="px-4 py-2 border">{course.title}</td>
                  <td className="px-4 py-2 border">${course.price}</td>
                  <td className="px-4 py-2 border">
                    <div className="w-16 h-16 mx-auto">
                      <Image
                        src={course.img}
                        alt={course.title}
                        width={64} 
                        height={64}
                        className="rounded object-cover" 
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2 border">
                    <button
                      className="bg-red-500 text-white px-2 lg:px-4 py-1 lg:py-2 rounded hover:bg-red-600"
                      onClick={() => handleDelete(course._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

            {/* Total Price and Checkout Button */}
            <div className="mt-6 bg-gray-50 p-6 rounded-md shadow-md lg:flex justify-between items-center">
          <p className="text-2xl font-semibold">Total Price: <span className="text-green-600">${totalPrice.toFixed(2)}</span></p>
          <button
           
            className="btn btn-lg text-white px-6 py-3 rounded-md font-semibold"
          >
            Proceed to Checkout
          </button>
        </div>
        </div>
      )}
    </div>
  );
};

export default Selectedclasspage;
