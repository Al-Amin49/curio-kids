import Image from "next/image";

const CoursesCard = ({course}:any) => {
    return (
        <>
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
        </>
    );
};

export default CoursesCard;