import { teachersData } from "@/app/constants/data";
import Container from "../Container";
import teacherBg from "@/assets/shape/teacher-bg.jpg";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Teachers = () => {
  return (
    <div
      className="h-full py-10 mt-40 bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: `url(${teacherBg.src})`,
      }}
    >
      <h3 className="text-3xl text-center text-primary font-bold mb-8">
        Meet Our Teachers
      </h3>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-4 lg:mx-0">
          {teachersData.map((teacher) => (
            <div
              key={teacher.id}
              className="relative rounded-lg p-6 flex flex-col items-center text-center "
            >
              {/* Teacher Image */}
              <div className="relative w-40 h-40 mb-6">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  className="rounded-full object-cover w-full h-full"
                  width={260}
                  height={260}
                />
                {/* Social Media Icons */}
                <div className="absolute inset-0 flex items-center justify-end space-x-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a href={teacher.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="text-primary w-6 h-6 hover:text-secondary transition-colors duration-200" />
                  </a>
                  <a href={teacher.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="text-primary w-6 h-6 hover:text-secondary transition-colors duration-200" />
                  </a>
                  <a href={teacher.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-primary w-6 h-6 hover:text-secondary transition-colors duration-200" />
                  </a>
                  <a href={teacher.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-primary w-6 h-6 hover:text-secondary transition-colors duration-200" />
                  </a>
                </div>
              </div>

              {/* Teacher Name & Designation */}
              <h4 className="text-lg font-semibold text-black mb-2">{teacher.name}</h4>
              <p className="text-gray-600">{teacher.designation}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Teachers;
