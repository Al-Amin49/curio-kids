"use client"; // This ensures that `FilterCourse` is a client-side component

import React, { ChangeEvent, useState } from 'react';
import { Course } from '@/app/types/courses.type';
import CoursesCard from '../../CoursesCard/CoursesCard';


type TCourseProps = {
    courses: Course[];
};

const FilterCourse = ({ courses }: TCourseProps) => {


    return (
        <div>
         

    
        </div>
    );
};

export default FilterCourse;
