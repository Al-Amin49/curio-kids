"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../Container";
import child1 from "../../../../assets/child1.png";
import child2 from "../../../../assets/child2.png";
import bannerShape1 from "../../../../assets/shape/banner-shape-1.png";
import backgroundShape from "../../../../assets/shape/banner-bg-shape-1.png";

const bannerShape = {
  initial: { x: 0 },
  animate: {
    x: 30,
    transition: {
      duration: 1,
      x: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

const Banner = () => {
  return (
    <div
      className="bg-gray-100 "
      style={{
        backgroundImage: `url(${backgroundShape.src})`,
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between py-10 lg:py-14">
          <div className="text-center lg:text-left">
            <motion.div
              variants={bannerShape}
              initial="initial"
              animate="animate"
            >
              <Image
                src={bannerShape1}
                alt="banner shape"
                className="w-24 mx-auto lg:mx-0"
              />
            </motion.div>

            <h5 className="text-primary font-medium mt-6">
              Play, Learn and Grow
            </h5>
            <h1 className="text-3xl lg:text-5xl text-black font-bold mt-4 lg:mt-6">
              Empowering Student Knowledge
            </h1>
            <p className="lg:w-[80%] my-4 text-gray-700 mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <button className="btn btn-md lg:btn-lg">Learn More</button>
              <button className="bg-secondary text-white rounded-md px-3 lg:px-4 py-1.5 lg:py-2 ml-3">
                Find Out More
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:mr-10 mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 500, rotate: 30 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="lg:w-[600px]"
            >
              <Image src={child1} alt="Child" />
            </motion.div>
            <Image src={child2} alt="Child" className="hidden md:block " />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
