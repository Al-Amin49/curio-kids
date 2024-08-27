"use client"
import Image from "next/image";
import Container from "../Container";
import child from "@/assets/child3.jpg";
import bannerShape2 from "@/assets/shape/banner-shape-4.png";
import {motion} from 'framer-motion'
import { bannerShape } from "./Banner";


const WhoWeAre = () => {
  return (
    <div className="py-10 bg-gray-50">
    
      <Container className="flex flex-col lg:flex-row items-center  justify-evenly space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start ">
          <Image
            src={child}
            alt="Child Image"
            className="rounded-lg shadow-lg lg:w-full h-auto "
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
         <div className="flex justify-center items-center">
         <h3 className="text-xl text-primary font-semibold mb-2">
            Who We Are
          </h3>
          <motion.div
              variants={bannerShape}
              initial="initial"
              animate="animate"
            >
              <Image
                src={bannerShape2}
                alt="banner shape"
                className="w-16 mx-auto lg:mx-0"
              />
            </motion.div>
         </div>
          <h1 className="text-2xl lg:text-3xl text-black font-bold">
            Passionate About Kindergarten Education
          </h1>
          <p className="text-gray-600 my-4 lg:w-[85%] mx-auto lg:mx-0">
            Our commitment to early childhood and kindergarten education runs deep. 
            We are dedicated to fostering a love of learning in young minds. Through nurturing care 
            and expert guidance, we aim to create an environment where children thrive.
          </p>

          {/* Numbered Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-6 m-4 lg:m-0">
            <div className="flex items-center space-x-4">
              <span className="bg-primary rounded-full py-2 px-4 text-white text-sm">
                1
              </span>
              <h2 className="font-bold text-black text-lg">Homelike Environment</h2>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-primary rounded-full py-2 px-4 text-white text-sm">
                2
              </span>
              <h2 className="font-bold text-black text-lg">Quality Educators</h2>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-primary rounded-full py-2 px-4 text-white text-sm">
                3
              </span>
              <h2 className="font-bold text-black text-lg">Safety and Security</h2>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-primary rounded-full py-2 px-4 text-white text-sm">
                4
              </span>
              <h2 className="font-bold text-black text-lg">Play to Learn</h2>
            </div>
          </div>
          <div className="text-center mt-8">
          <button className="btn btn-lg ">Read More</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhoWeAre;
