import { eventsData } from "@/app/constants/data";
import Container from "../Container";
import Image from "next/image";
import backgroundImg from "@/assets/event/event-bg.jpg"; // Assuming you're using Next.js's Image component.
import { FaRegClock, FaTimes } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const Events = () => {
  return (
    <div
      className="py-16"
      style={{
        backgroundImage: `url(${backgroundImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center mb-10">
        <h3 className="text-secondary text-xl lg:text-2xl font-semibold">
          Events
        </h3>
        <h1 className="text-primary text-2xl lg:text-4xl font-bold">
          Upcoming Events
        </h1>
      </div>
      <Container>
        <div className="grid grid-cols-1 gap-8 mx-4 lg:mx-0">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="flex flex-col lg:flex-row items-center justify-between mx-4 p-10">
                <div className="">
                  <Image
                    src={event.img}
                    alt={event.title}
                    className="h-64"
                    layout="responsive"
                
                  />
                </div>
                <div className=" p-4 flex flex-col justify-between text-center lg:text-start">
                  <div className="">
                    <h2 className="text-xl font-bold text-primary">
                      {event.title}
                    </h2>
                    <p className="text-gray-600 flex items-center ">
                      <FaRegClock className="text-primary font-bold mr-1" />{" "}
                      {event.time}
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <FaLocationDot className="text-primary font-bold mr-1" />
                      {event.location}
                    </p>
                  </div>
                </div>
                <div className="text-xl lg:text-3xl">
                  <p className="text-secondary font-semibold">{event.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Events;
