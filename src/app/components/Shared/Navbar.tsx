"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useAuth } from "@/lib/AuthProvider";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, loading, logout } = useAuth();
  console.log("user", user);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Animation variants for stagger effect
  const menuVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative z-10">
      <nav className="flex items-center justify-between py-4 px-6 lg:px-12">
        <Link href="/">
          <h1 className="text-xl lg:text-3xl font-bold">
            <span className="text-primary">C</span>urio{" "}
            <span className="text-secondary">K</span>ids
          </h1>
        </Link>

        {/* Menu icon for small screens */}
        <div className="lg:hidden flex items-center space-x-1 relative">
          <div>
            {!loading && user && (
              <>
                <Image
                  src={user.profilePicture}
                  alt="Profile"
                  width={30}
                  height={30}
                  className="rounded-full cursor-pointer border border-primary"
                  onClick={toggleDropdown}
                />
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                    <p className="block px-4 py-2 text-gray-700">
                      {user.name} ({user.role})
                    </p>
                    <button
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        logout();
                        setDropdownOpen(false);
                      }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          <div>
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
          </div>
        </div>

        {/* Navbar links */}
        <ul className="hidden lg:flex items-center space-x-4 text-black font-semibold">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/teachers">Instructors</Link>
          <Link href="/">Blogs</Link>
          <Link href="/about">About</Link>
          {/* Show Login button only when user is not logged in */}
          {!loading && !user && (
            <Link href="/login">
              <button className="btn btn-lg">Login</button>
            </Link>
          )}

          {/* Show profile or logout button if user is logged in */}
          {!loading && user && (
            <div className="relative">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={toggleDropdown}
              >
                <Image
                  src={user.profilePicture}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full border border-primary"
                />
                <div className="flex flex-col">
                  <span>{user.name}</span>
                  <span className="text-sm bg-green-300 rounded-md text-center">
                    {user.role}
                  </span>
                </div>
              </div>

              {/* Dropdown menu for large screens */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  <p className="block px-4 py-2 text-gray-700">
                    {user.name} ({user.role})
                  </p>
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      logout();
                      setDropdownOpen(false);
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </ul>

        {/* Mobile menu */}
        {isOpen && (
          <motion.ul
            className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 p-4 text-black font-semibold lg:hidden"
            initial="hidden"
            animate="visible"
            variants={menuVariants}
          >
            <motion.li variants={itemVariants}>
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/courses" onClick={toggleMenu}>
                Courses
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/teachers" onClick={toggleMenu}>
                Instructors
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/" onClick={toggleMenu}>
                Blogs
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/" onClick={toggleMenu}>
                About Us
              </Link>
            </motion.li>

            <motion.li variants={itemVariants}>
              {!loading && !user && (
                <Link href="/login" onClick={toggleMenu}>
                  <button className="btn btn-lg">Login</button>
                </Link>
              )}
            </motion.li>
          </motion.ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
