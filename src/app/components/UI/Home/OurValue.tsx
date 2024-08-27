"use client";
import Image from "next/image";
import Container from "../Container";
import value from "@/assets/shape/value-1.png";
import bannerShape2 from "@/assets/shape/banner-shape-4.png";
import { motion } from "framer-motion";
import valueShape3 from "@/assets/shape/value-shape-3.png";
import valueShape1 from "@/assets/shape/value-shape-1.png";
import valueShape2 from "@/assets/shape/value-shape-2.png";

const OurValue = () => {
  return (
    <div className="py-10 bg-gray-50 relative overflow-hidden">
      {/* Background Shape */}
      <div className="absolute top-20 right-0 p-4">
        <Image
          src={valueShape3}
          alt="Background Shape 3"
          className="w-32 h-32 lg:w-48 lg:h-48 object-contain"
        />
      </div>
      <div className="absolute top-5 left-0 p-4">
        <Image
          src={valueShape1}
          alt="Background Shape 1"
          className="w-32 h-32  object-contain"
        />
      </div>
      <div className="hidden lg:block absolute bottom-0 left-0 p-4">
        <Image
          src={valueShape2}
          alt="Background Shape 3"
          className="w-32 h-32  object-contain"
        />
      </div>

      <Container className="flex flex-col lg:flex-row items-center justify-evenly space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={value}
            alt="Child Image"
            className="rounded-lg shadow-lg w-full h-auto max-w-xs lg:max-w-md"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left z-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl text-primary font-semibold mb-2">
            Our Care Value
          </h3>
          <h1 className="text-2xl lg:text-4xl text-black font-bold mb-6">
            We are Refunding Early Childcare Education
          </h1>

          {/* Numbered Features */}
          <div className="grid grid-cols-1 gap-y-6">
            <div className="flex items-start space-x-4">
              <span className="bg-primary rounded-full py-2 px-4 text-white text-sm">
                1
              </span>
              <div>
                <h2 className="font-bold text-black text-lg">
                  Active Learning
                </h2>
                <p className="text-gray-700 mt-2">
                  We emphasize hands-on, experiential learning where children
                  actively engage in activities that stimulate their curiosity
                  and creativity. Our approach fosters critical thinking,
                  problem-solving, and a lifelong love of learning.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="bg-primary rounded-full py-2 px-4 text-white text-sm">
                2
              </span>
              <div>
                <h2 className="font-bold text-black text-lg">
                  Safe Environment
                </h2>
                <p className="text-gray-700 mt-2">
                  Your child's safety is our top priority. We provide a
                  nurturing and secure environment where children feel
                  comfortable to explore and grow. Our facilities are designed
                  to meet the highest safety standards, ensuring peace of mind
                  for parents.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="bg-primary rounded-full py-2 px-4 text-white text-sm">
                3
              </span>
              <div>
                <h2 className="font-bold text-black text-lg">Fully Equipped</h2>
                <p className="text-gray-700 mt-2">
                  Our classrooms are equipped with modern educational tools and
                  resources that support a diverse range of learning activities.
                  From interactive technology to creative play materials, we
                  provide everything needed to enhance your child's educational
                  experience.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default OurValue;
