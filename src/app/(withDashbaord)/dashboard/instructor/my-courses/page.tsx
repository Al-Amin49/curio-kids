"use client"
import React, { useEffect, useState } from "react";
import useAxiosSecure from "@/app/components/axios/axiosSecure";
import LoadingPage from "@/app/loading";
import { Course } from "@/app/types/courses.type";
import { toast } from "sonner";
import Swal from "sweetalert2";

const MyCoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  // Fetch instructor's courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axiosSecure.get("/instructor/courses");
        setCourses(response.data); // Store courses in state
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      } finally {
        setLoading(false); // Set loading to false after data fetch
      }
    };

    fetchCourses();
  }, [axiosSecure]);

  // Handle course deletion
  const handleDelete = async (courseId: string) => {
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
            await axiosSecure.delete(`/courses/${courseId}`);
  
            // Update the local state to remove the course
            setCourses((prevCourses) => 
              prevCourses.filter((course:Course) => course._id !== courseId)
            );
  
            // Show success message
            Swal.fire('Deleted!', 'Your course has been deleted.', 'success');
          } catch (error) {
            console.error('Error deleting course:', error);
            // Show error message
            toast.info("For security purpose. Only project owner can do this")
          }
        }
      });
  };

  if (loading) {
    return <LoadingPage/>;
  }

  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-4">My Courses</h3>

      {courses.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Course Title</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course:Course) => (
                <tr key={course._id}>
                  <td className="text-black border-gray-300 px-4 py-2">{course.title}</td>
                  <td className="text-black border border-gray-300 px-4 py-2">${course.price}</td>
                  <td  className={`border border-gray-300 px-4 py-2 font-bold text-white ${
                      course.status === "approved"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}>{course.status}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleDelete(course._id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No courses found.</p>
      )}
    </div>
  );
};

export default MyCoursesPage;
