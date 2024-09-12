'use client';
import useAxiosSecure from '@/app/components/axios/axiosSecure';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
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
      <h3 className="text-xl font-bold mb-4">Selected Courses</h3>
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
                      width={64} // Size in pixels
                      height={64} // Size in pixels
                      className="rounded object-cover" // Make image responsive and rounded
                    />
                  </div>
                </td>
                <td className="px-4 py-2 border">
                  <button
                    className="btn btn-lg mr-1 my-2 lg:my-0"
                    onClick={() => handlePay(course._id)}
                  >
                    Pay
                  </button>
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
      </div>
    </div>
  );
};

export default Selectedclasspage;
