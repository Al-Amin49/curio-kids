import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';

const DashboardSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

   

    return (
        <div
            className="bg-gray-800 text-white flex flex-col h-screen sticky top-0"
           
        >
            {/* Hamburger Menu for small screens */}
            <button
                className="p-4 focus:outline-none md:hidden"
                onClick={toggleSidebar}
            >
                <FaBars size={24} />
            </button>
            <Link href="/">
          <h1 className="text-xl lg:text-2xl font-bold mx-2 mt-5 hidden md:block">
            <span className="text-primary">C</span>urio{" "}
            <span className="text-secondary">K</span>ids
          </h1>
        </Link>
            {/* Sidebar menu */}
            <ul className="mt-10 space-y-6">
                <li className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-3 rounded-md">
                    <FaHome />
                    <span className={`${isOpen ? "block" : "hidden"} md:block`}>Home</span>
                </li>
             <Link href="">
             <li className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-3 rounded-md">
                    <FaUser />
                    <span className={`${isOpen ? "block" : "hidden"} md:block`}>SelectedClass</span>
                </li>
             </Link>
                <li className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-3 rounded-md">
                    <FaCog />
                    <span className={`${isOpen ? "block" : "hidden"} md:block`}>Settings</span>
                </li>
                <li className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-3 rounded-md mt-auto text-red-400">
                    <FaSignOutAlt />
                    <span className={`${isOpen ? "block" : "hidden"} md:block`}>Logout</span>
                </li>
            </ul>
        </div>
    );
};

export default DashboardSidebar;
