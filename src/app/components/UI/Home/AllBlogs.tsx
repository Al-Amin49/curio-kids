import { blogData } from "@/app/constants/data";
import Container from "../Container";
import Image from "next/image";
import back1 from "@/assets/shape/class-shape-1.png";
import back2 from "@/assets/shape/class-shape-2.png";

const AllBlogs = () => {
  return (
    <div className="py-10 bg-background relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute -bottom-20 left-0">
        <Image src={back1} alt="Background Shape 1" className="w-48 h-48 object-contain" />
      </div>
      <div className="absolute -bottom-10 right-0">
        <Image src={back2} alt="Background Shape 2" className="w-48 h-48 object-contain" />
      </div>
      
      <h3 className="text-xl text-center text-secondary font-bold ">
        News and Blog
      </h3>
      <h3 className="text-3xl text-center text-primary font-bold mb-8">
        Latest News
      </h3>

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 lg:mx-0">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden relative"
            >
              <div className="relative">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-48 object-cover hover:scale-110 transform transition-all duration-300"
                  width={400}
                  height={200}
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-black">
                  {blog.title}
                </h4>
                <p className="text-gray-600 my-2">{blog.description}</p>
                <div className="text-sm text-gray-500 flex space-x-4">
                  <p><strong className="text-primary">Date:</strong> {blog.date}</p>
                  <p><strong className="text-primary">Author:</strong> {blog.author}</p>
                </div>
                <button className="btn btn-lg mt-4">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllBlogs;
