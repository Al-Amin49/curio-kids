import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../axios/axiosSecure";
import { useAuth } from "@/lib/AuthProvider";

const SelectCourse = ({ course }: any) => {
  const router = useRouter();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const handleSelectCourse = async () => {
    if (!user) {
      // Show alert and redirect to login
      Swal.fire({
        icon: "info",
        title: "Login Required",
        text: "Please log in to continue.",
        showConfirmButton: true,
        confirmButtonText: "Login",
      }).then(() => {
        router.push("/login");
      });
      return;
    }

    try {
      const response = await axiosSecure.post(
        "https://curio-kids-server.vercel.app/courses/select",
        { courseId: course._id }
      );

      Swal.fire({
        icon: "success",
        title: "Course selected successfully!",
        text: "You will now be redirected to your classes.",
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        router.push("/dashboard/selected-course");
      });
    } catch (error) {
      console.error("Error selecting course:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to select the course",
        text: "Please try again later.",
        showConfirmButton: true,
      });
    }
  };

  return (
    <button onClick={handleSelectCourse} className="btn btn-lg">
      Select
    </button>
  );
};

export default SelectCourse;
