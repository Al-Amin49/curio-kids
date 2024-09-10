"use client"
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
 import loginImg from "@/assets/login.jpg";
import { useAuth } from "@/lib/AuthProvider";
const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const {register:registerUser}= useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("data", data);
    if (agree) {
        registerUser(data.name, data.email, data.password);
        console.log(data)
      } else {
        alert("You must agree to the terms and conditions");
      }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Form Section */}
      <div className="flex flex-col justify-center items-center md:w-1/2 w-full p-8">
        <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
         
         <h2 className="text-xl lg:text-2xl font-bold text-black text-center">Welcome To</h2>
         <h1 className="text-2xl lg:text-3xl font-bold text-center">
          <span className="text-primary">C</span>urio{" "}
          <span className="text-secondary">K</span>ids
        </h1>
        
          <p className="mb-4 text-[#707070] text-center">
          Sign up to ignite your child’s curiosity
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-gray-600">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "name is required" })}
                placeholder="Enter your email"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-gray-600">
                Email address
              </label>
              <input
                id="email"
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Enter your email"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            
            </div>
            <div className="flex flex-col relative">
              <label htmlFor="password" className="mb-1 text-gray-600">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "Password is required" })}
                placeholder="Enter your password"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
             
              <span
                className="absolute right-3 top-10 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Terms and Policy Checkbox */}
            <div className="flex items-center">
              <input
                id="agree"
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
                className="mr-2"
              />
              <label htmlFor="agree" className="font-bold">
                I agree to the{" "}
                <span className="underline">terms and policy</span>
              </label>
            </div>
            <button
              disabled={!agree}
              type="submit"
              className={`w-full py-2 rounded transition duration-200 ${
                agree
                  ? "bg-secondary text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Register
            </button>
          </form>

        
          <div className="text-center mt-2">
            <p>
              Already Have an account?{" "}
              <a href="/login" className="text-primary font-medium">
               Login
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src={loginImg}
          alt="Login"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  );
};

export default RegisterPage;
