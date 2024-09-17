"use client"; 
import React, { ChangeEvent, useState } from 'react';
import { Course } from '@/app/types/courses.type';
import CoursesCard from '../../CoursesCard/CoursesCard';

type TCourseProps = {
    courses: Course[];
};

const FilterCourse = ({ courses }: TCourseProps) => {
    const [searchTerm, setSearchTerm] = useState<string>(''); // For text search
    const [ageRange, setAgeRange] = useState<string>(''); 
    const [priceRange, setPriceRange] = useState<string>(''); // For price range filter

    // Handle search input change
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value.toLowerCase()); 
    };

    // Handle age range change
    const handleAgeRangeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setAgeRange(e.target.value);
    };

    // Handle price range change
    const handlePriceRangeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPriceRange(e.target.value);
    };

    // Filter the courses based on search term, age range, and price range
    const filteredCourses = courses.filter(course => {
        const matchesSearchTerm = course.title.toLowerCase().includes(searchTerm) || course.description.toLowerCase().includes(searchTerm);
        
        // Filter based on the selected age range
        const matchesAgeRange = ageRange ? course.age === ageRange : true;

        // Filter based on the selected price range
        const matchesPriceRange =
            priceRange === "below-50" ? course.price < 50 :
            priceRange === "50-80" ? course.price >= 50 && course.price <= 80 :
            true;

        return matchesSearchTerm && matchesAgeRange && matchesPriceRange;
    });

    return (
        <div>
            <div className="flex justify-center items-center space-x-4">
                {/* Search input */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="p-2 border rounded-md border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Age Range filter */}
                <div className="mb-4">
                    <select
                        value={ageRange}
                        onChange={handleAgeRangeChange}
                        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">All Age Ranges</option>
                        <option value="3-5">3-5 Years</option>
                        <option value="5-7">5-7 Years</option>
                        {/* Add other age ranges as needed */}
                    </select>
                </div>

                {/* Price Range filter */}
                <div className="mb-4">
                    <select
                        value={priceRange}
                        onChange={handlePriceRangeChange}
                        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">All Price Ranges</option>
                        <option value="below-50">Below $50</option>
                        <option value="50-80">$50 - $80</option>
                        {/* Add other price ranges if needed */}
                    </select>
                </div>
            </div>

            {/* Filtered Courses */}
           
            {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
                    {filteredCourses.map(course => (
                        <CoursesCard key={course._id} course={course} />
                    ))}
                </div>
            ) : (
                <div className="text-center text-xl font-medium text-gray-500 mb-40 mt-4">
                    No courses found matching your criteria.
                </div>
            )}
        </div>
    );
};

export default FilterCourse;
