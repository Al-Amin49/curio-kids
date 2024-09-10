"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; 
import { motion } from "framer-motion"; 
import { useAuth } from "@/lib/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user, loading, logout}= useAuth();
  console.log('user', user)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
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
            <div className="flex items-center space-x-4">
              <span>{user.email}</span>
              <button className="btn btn-lg" onClick={()=>logout()}>
                Logout
              </button>
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
              <Link href="/" onClick={toggleMenu}>Home</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/courses" onClick={toggleMenu}>Courses</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/teachers" onClick={toggleMenu}>Instructors</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/" onClick={toggleMenu}>Blogs</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/" onClick={toggleMenu}>About Us</Link>
            </motion.li>
          
            <motion.li variants={itemVariants}>
              <Link href="/login" onClick={toggleMenu}>
                <button className="btn btn-lg">Login</button>
              </Link>
            </motion.li>
          </motion.ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
