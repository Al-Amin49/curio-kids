import { coursesData } from "@/app/constants/data";
import Container from "../Container";
import Image from "next/image";
import back1 from"@/assets/shape/class-shape-1.png";
import back2 from"@/assets/shape/class-shape-2.png";

const PopularCourses = () => {
  return (
    <div className="py-10 bg-background relative overflow-hidden">
          {/* Background Images */}
      <div className="absolute -bottom-20 left-0">
        <Image src={back1} alt="Background Shape 1" className="w-48 h-48 object-contain" />
      </div>
      <div className="absolute -bottom-10 right-0">
        <Image src={back2} alt="Background Shape 2" className="w-48 h-48 object-contain" />
      </div>
      
      <h3 className="text-3xl text-center text-primary font-bold mb-8">
        Popular Courses
      </h3>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 lg:mx-0">
          {coursesData.map((course) => (
            <div
              key={course.id}
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
                  {course.price}
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
                <button className="btn btn-lg mt-4">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopularCourses;
