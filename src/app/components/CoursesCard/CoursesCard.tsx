"use client"
import { useState } from "react";
import Image from "next/image";
import { Course } from "@/app/types/courses.type";
import SelectCourse from "./SelectCourse";

type TCourseProps = {
  course: Course;
};

const CoursesCard = ({ course }: TCourseProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div
        key={course._id}
        className="bg-white rounded-lg shadow-lg overflow-hidden relative"
      >
        <div className="relative">
          <Image
            src={course.img}
            alt={course.title}
            className="w-full h-48 object-cover hover:scale-110 transform transition-all duration-300"
            width={400}
            height={200}
          />
          <div className="absolute -bottom-7 right-2 bg-primary text-white py-1 px-3 rounded-full text-sm font-semibold">
            ${course.price}
          </div>
        </div>
        <div className="p-6">
          <h4 className="text-xl font-semibold text-gray-800">
            {course.title}
          </h4>
          <p className="text-gray-600 my-2">{course.description}</p>
          <div className="border border-dashed border-primary w-full my-4"></div>
          <div className="text-sm text-gray-500 flex space-x-4">
            <p><strong>Age:</strong> {course.age}</p>
            <p><strong>Time:</strong> {course.time}</p>
            <p><strong>Seats:</strong> {course.seat}</p>
          </div>
          <div className="flex space-x-4 mt-4">
            <SelectCourse course={course}/>
            <button
              onClick={openModal}
              className="btn btn-lg bg-secondary text-white"
            >
              See Demo
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Video */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 mx-4 lg:mx-0">
          <div className="bg-white rounded-lg overflow-hidden max-w-lg mx-auto">
            <div className="p-4 flex justify-between items-center">
              <h4 className="text-lg font-semibold">Course Demo</h4>
              <button onClick={closeModal} className="text-red-500">
                &#x2715; {/* Close icon */}
              </button>
            </div>
            <div className="p-4">
              <video
                src={course.video}
                controls
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoursesCard;
