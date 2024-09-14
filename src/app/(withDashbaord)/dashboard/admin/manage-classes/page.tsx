"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAxiosPublic from '@/app/components/axios/axiosPublic';
import useAxiosSecure from '@/app/components/axios/axiosSecure';
import { Course } from '@/app/types/courses.type';
import Image from 'next/image';

const ManageClasses = () => {
    const axiosPublic= useAxiosPublic();
    const axiosSecure=useAxiosSecure()
  const [classes, setClasses] = useState<Course[]>([]);
  
  // Fetch all classes from the API
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axiosPublic.get('/courses');  
        setClasses(response.data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };
    
    fetchClasses();
  }, [axiosPublic]);
  
  // Handle status update
  const updateStatus = async (courseId:string, newStatus:string) => {
    try {
      await axiosSecure.patch(`/admin/courses/${courseId}`, { status: newStatus });
      // Update the status in the local state
      setClasses(prevClasses => prevClasses.map((course:Course) => 
        course._id === courseId ? { ...course, status: newStatus } : course
      ));
      alert("Update course status")
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // Handle course deletion
  const deleteCourse = async (courseId:string) => {
    try {
      await axios.delete(`/courses/${courseId}`);
      // Remove the deleted course from the local state
      setClasses(prevClasses => prevClasses.filter((course:Course) => course._id !== courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <div className="manage-classes">
      <h3 className="text-2xl font-semibold mb-4">Manage Classes</h3>
      
      <table className="min-w-full bg-white border border-gray-200 overflow-x-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-4">Image</th>
            <th className="text-left p-4">Title</th>
            <th className="text-left p-4">Price</th>
            <th className="text-left p-4">Status</th>
            <th className="text-left p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes?.map((course:Course )=> (
            <tr key={course._id} className="border-t border-gray-200">
              <td className="p-4">
                <Image src={course.img} alt={course.title} 
                className="w-16 h-16 object-cover" 
                width={12}
                height={12}
                /></td>
              <td className="p-4">{course.title}</td>
              <td className="p-4">${course.price}</td>
              <td className="p-4">
                <select 
                  value={course.status} 
                  onChange={(e) => updateStatus(course._id, e.target.value)}
                  className="border rounded p-1"
                >
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </td>
              <td className="p-4">
                <button 
                  className="bg-red-500 text-white px-4 py-2 rounded" 
                  onClick={() => deleteCourse(course._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;
