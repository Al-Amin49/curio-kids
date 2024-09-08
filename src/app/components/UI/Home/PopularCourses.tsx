import { coursesData } from "@/app/constants/data";
import Container from "../Container";
import Image from "next/image";
import back1 from "@/assets/shape/class-shape-1.png";
import back2 from "@/assets/shape/class-shape-2.png";
import Link from "next/link";
import CoursesCard from "../../CoursesCard/CoursesCard";

const PopularCourses = async() => {
  const res = await fetch(`http://localhost:8000/courses`, {
    cache:'no-store'
  });
  const courses= await res.json();
  console.log('data', courses)
  return (
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

      <h3 className="text-3xl text-center text-primary font-bold mb-8">
        Popular Courses
      </h3>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 lg:mx-0">
          {courses?.slice(0,3).map((course) => (
            <CoursesCard key={course.id} course={course} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/courses">
            {" "}
            <button className="btn btn-lg font-medium">View All</button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default PopularCourses;
