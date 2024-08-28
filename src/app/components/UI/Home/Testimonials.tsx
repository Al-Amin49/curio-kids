"use client";
import { testimonialData } from "@/app/constants/data";
import Container from "../Container";
import Slider from "react-slick";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const Testimonials = () => {
  const sliderRef = useRef<Slider>(null); // Use useRef hook to create a ref

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 testimonials at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024, // Adjust for tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Adjust for small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-50 py-10 mx-4 lg:mx-0">
      <h4 className="text-center text-primary text-xl font-semibold mb-2">
        Testimonials
      </h4>
      <h1 className="text-center text-3xl font-bold text-black mb-8">
        What Parents Say About Us
      </h1>
      <Container>
        <Slider ref={sliderRef} {...settings}>
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="bg-background rounded-full p-10 flex flex-col items-center text-center text-black">
                <FaQuoteLeft className="text-secondary text-4xl mb-4" />
                <p className="text-lg mb-4">{testimonial.description}</p>
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-sm">{testimonial.profession}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="bg-primary text-white p-3 rounded-full hover:bg-secondary transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="bg-primary text-white p-3 rounded-full hover:bg-secondary transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
