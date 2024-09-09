import React, { ChangeEvent, useState } from "react";
import Cover from "../components/Cover";
import Image from "next/image";
import Container from "../components/UI/Container";
import { coursesData } from "../constants/data";
import CoursesCard from "../components/CoursesCard/CoursesCard";
import Link from "next/link";
import back1 from "@/assets/shape/class-shape-1.png";
import back2 from "@/assets/shape/class-shape-2.png";
import { Course } from "../types/courses.type";
import FilterCourse from "../components/UI/Courses/FilterCourse";
import banner from "@/assets/courses/page-banner-2.jpg";

const CoursesPage = async () => {
  const res = await fetch(`https://curio-kids-server.vercel.app/courses`, {
    cache: "no-store",
  });
  const courses = await res.json();

  return (
    <div>
      <Cover banner={banner} title="Kids Courses" subTitle="Courses" />
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
          <h3 className="text-3xl text-center text-primary font-bold mb-8">
            All Courses
          </h3>

          {courses?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 lg:mx-0">
              {courses?.map((course: Course) => (
                <CoursesCard key={course._id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center text-xl font-medium text-gray-500">
              No courses found matching your criteria.
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default CoursesPage;
