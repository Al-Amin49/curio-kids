"use client"
import React, { ChangeEvent, useState } from 'react';
import CourseCover from '../components/UI/Courses/CourseCover';
import Image from 'next/image';
import Container from '../components/UI/Container';
import { coursesData } from '../constants/data';
import CoursesCard from '../components/CoursesCard/CoursesCard';
import Link from 'next/link';
import back1 from "@/assets/shape/class-shape-1.png";
import back2 from "@/assets/shape/class-shape-2.png";
import { Course } from '../types/courses.type';


const CoursesPage = () => {
  const [selectedAge, setSelectedAge] = useState<string>('');
  const [selectedPrice, setSelectedPrice] = useState<number | ''>('');

  const handleAgeFilterChange = (e:ChangeEvent<HTMLSelectElement>) => setSelectedAge(e.target.value);
  const handlePriceFilterChange = (e:ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedPrice(value === '' ? '' : Number(value));
  };

  const filteredCourses = coursesData.filter(course => {
    return (
      (selectedAge ? course.age === selectedAge : true) &&
      (selectedPrice ? course?.price <= selectedPrice : true)
    );
  });

  return (
    <div>
      <CourseCover />
      <div className="py-10 bg-background relative overflow-hidden">
        {/* Background Images */}
        <div className="absolute -bottom-20 left-0">
          <Image
            src={back1}
            alt="Background Shape 1"
            className="w-48 h-48 object-contain"
          />
        </div>
        <div className="absolute -bottom-10 right-0">
          <Image
            src={back2}
            alt="Background Shape 2"
            className="w-48 h-48 object-contain"
          />
        </div>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mx-4 lg:mx-0">
            {/* Sidebar for Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h4 className="text-xl font-bold mb-4 text-primary">Filter by:</h4>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2 text-gray-700">Age</label>
                  <select 
                    value={selectedAge} 
                    onChange={handleAgeFilterChange} 
                    className="block w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  >
                    <option value="">All Ages</option>
                    <option value="3-5">3-5 Years</option>
                    <option value="6-8">6-8 Years</option>
                    <option value="9-12">9-12 Years</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2 text-gray-700">Price</label>
                  <input
                    type="number"
                    value={selectedPrice}
                    onChange={handlePriceFilterChange}
                    placeholder="Max Price"
                    className="block w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
            </div>

            {/* Courses Listing */}
            <div className="lg:col-span-3">
              <h3 className="text-3xl text-center text-primary font-bold mb-8">
                Popular Courses
              </h3>
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map((course:Course) => (
                    <CoursesCard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                <div className="text-center text-xl font-medium text-gray-500">
                  No courses found matching your criteria.
                </div>
              )}
             
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CoursesPage;
