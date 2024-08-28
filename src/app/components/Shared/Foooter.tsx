import React from "react";
import Image from "next/image";
import backgroundImage from "@/assets/Kids-club-background-01.jpg"; // Ensure the image path is correct

const Footer = () => {
    const currentYear = new Date().getFullYear(); 
  return (
    <div
      className="relative bg-cover bg-center text-white py-16  "
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
    >
      {/* Overlay for transparent effect */}
      <div className="absolute inset-0 bg-[#000] opacity-90"></div>

      <div className="relative container mx-auto px-4 text-center lg:text-left">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
          <h1 className="text-xl lg:text-3xl font-bold">
              <span className="text-primary">C</span>urio{" "}
              <span className="text-secondary">K</span>ids
            </h1>
        
            <p className="text-sm">
              We are dedicated to providing the best services for children.
            </p>
          </div>
          {/* Column 1 */}
          <div>
          <h4 className="text-lg font-bold mb-4">About Us</h4>
            <p className="text-sm ">
              We are dedicated to providing the best services for children.
            </p>
          </div>
          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="text-sm">56 Glassford Street, Glasgow</p>
            <p className="text-sm">+1 234 567 890</p>
            <p className="text-sm">info@example.com</p>
          </div>
          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex justify-center lg:justify-start space-x-4">
              {/* Replace # with actual links */}
              <a href="#" className="text-xl hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-xl hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-xl hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-xl hover:text-gray-400">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-center ">
          <p>&copy; {currentYear} Curio Kids. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
