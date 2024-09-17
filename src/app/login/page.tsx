"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
 import loginImg from "@/assets/login.jpg";
 import {motion} from 'framer-motion'
import { bannerShape } from "../components/UI/Home/Banner";
import bannerShape1 from "@/assets/shape/banner-shape-1.png";
import { useAuth } from "@/lib/AuthProvider";
import { toast } from "sonner";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [isModalOpen, setIsModalOpen]= useState(false)
  const router = useRouter();
  const {login}= useAuth();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("data", data);
    if (agree) {
     login(data.email, data.password)
      toast.success('Login Successfull');
      router.push("/"); 
    }
  };

  const handleDemoAccount = (accountType: string) => {
    // Set demo credentials based on account type
    if (accountType === "admin") {
      setValue("email", "alamin496832@gmail.com");
      setValue("password", "dev123");
    } else if (accountType === "instructor") {
      setValue("email", "khayrul12@gmail.com");
      setValue("password", "dev123");
    } else if (accountType === "student") {
      setValue("email", "babor32@gmail.com");
      setValue("password", "dev123");
    }

    // Close modal after setting values
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Form Section */}
      <div className="flex flex-col justify-center items-center md:w-1/2 w-full p-8">
        <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
         <div className="flex items-center space-x-1">
         <h2 className="text-2xl font-bold text-black">Welcome Back</h2>
          <motion.div
              variants={bannerShape}
              initial="initial"
              animate="animate"
            >
              <Image
                src={bannerShape1}
                alt="banner shape"
                className="w-8 mx-auto lg:mx-0"
              />
            </motion.div>
         </div>
          <p className="mb-8 text-[#707070]">
            Enter your credentials to access your account
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              Login
            </button>
          </form>

        
          <div className="text-center mt-2">
            <p>
              Dont Have an account?{" "}
              <a href="/register" className="text-primary font-medium">
               Register
              </a>
            </p>
          </div>
             {/* Use Demo Account Button */}
             <div className="text-center mt-4">
            <button
              className="text-blue-500 underline"
              onClick={() => setIsModalOpen(true)}
            >
              Use Demo Account
            </button>
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
         {/* Modal for Demo Account Selection */}
         {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-bold mb-4">Select a Demo Account</h3>
            <div className="space-y-2">
              <button
                className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => handleDemoAccount("admin")}
              >
                Admin Account
              </button>
              <button
                className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={() => handleDemoAccount("instructor")}
              >
                Instructor Account
              </button>
              <button
                className="w-full py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                onClick={() => handleDemoAccount("student")}
              >
                Student Account
              </button>
            </div>
            <button
              className="mt-4 text-red-500 underline"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
