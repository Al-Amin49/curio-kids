"use client";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAxiosSecure from "@/app/components/axios/axiosSecure";
import { toast } from "sonner";

const AddCoursePage = () => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const imageHostingKey = process.env.NEXT_PUBLIC_IMAGE_HOSTING_KEY;
  const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

  const onSubmit = async (data: any) => {
    try {
      // Uploading the image to imgbb
      const formData = new FormData();
      formData.append("image", data.img[0]);

      const imageResponse = await axios.post(imageHostingApi, formData);
      const imageUrl = imageResponse.data.data.url;

      // Prepare course data
      const courseData = {
        title: data.title,
        description: data.description,
        age: data.age,
        time: data.time,
        seat: data.seat,
        price: data.price,
        img: imageUrl,
        video: data.video,
      };

      // Post the course to the backend
      const response = await axiosSecure.post("/courses", courseData);

      console.log(response.data);
      reset(); 
      toast.success("Course added successfully!");
    } catch (error) {
      console.error("Error adding course:", error);
      toast.error("Failed to add course. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 lg:p-12">
      <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-black">Add a New Course</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-8 bg-white shadow-md rounded-lg"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Course Title */}
          <div>
            <label className="block font-semibold mb-1">Course Title</label>
            <input
              type="text"
              className="input w-full  border-2  p-2 rounded-md border-black focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300 ease-in-out hover:border-primary"
              {...register("title", { required: true })}
              placeholder="e.g: Cooking for Kids"
            />
            {errors.title && (
              <p className="text-red-500">Course title is required</p>
            )}
          </div>

          {/* Age Group */}
          <div>
            <label className="block font-semibold mb-1">Age Group</label>
            <input
              type="text"
              className="input w-full border-2  p-2 rounded-md border-black focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300 ease-in-out hover:border-primary"
              {...register("age", { required: true })}
              placeholder="e.g: 3-5"
            />
            {errors.age && (
              <p className="text-red-500">Age group is required</p>
            )}
          </div>

          {/* Description */}
          <div className="sm:col-span-2">
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              className="textarea textarea-bordered w-full border-2 border-black rounded-md"
              {...register("description", { required: true })}
              placeholder="Write not more than 100 characters"
            ></textarea>
            {errors.description && (
              <p className="text-red-500">Description is required</p>
            )}
          </div>

          {/* Class Time */}
          <div>
            <label className="block font-semibold mb-1">Class Time</label>
            <input
              type="text"
              className="input w-full border-2  p-2 rounded-md border-black focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300 ease-in-out hover:border-primary"
              {...register("time", { required: true })}
              placeholder="2pm-3pm"
            />
            {errors.time && (
              <p className="text-red-500">Class time is required</p>
            )}
          </div>

          {/* Number of Seats */}
          <div>
            <label className="block font-semibold mb-1">Number of Seats</label>
            <input
              type="number"
              className="input w-full border-2  p-2 rounded-md border-black focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300 ease-in-out hover:border-primary"
              {...register("seat", { required: true })}
              placeholder="e.g: 20"
            />
            {errors.seat && <p className="text-red-500">Seats are required</p>}
          </div>

          {/* Price */}
          <div>
            <label className="block font-semibold mb-1">Price</label>
            <input
              type="number"
              className="input w-full border-2  p-2 rounded-md border-black focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300 ease-in-out hover:border-primary"
              {...register("price", { required: true })}
              placeholder="e.g: 50"
            />
            {errors.price && <p className="text-red-500">Price is required</p>}
          </div>

          {/* Image */}
          <div>
            <label className="block font-semibold mb-1">Image</label>
            <input
              type="file"
              className="input w-full"
              {...register("img", { required: true })}
            />
            {errors.img && <p className="text-red-500">Image is required</p>}
          </div>

          {/* Video URL */}
          <div className="sm:col-span-2">
            <label className="block font-semibold mb-1">Video URL</label>
            <input
              type="url"
              className="input w-full border-2  p-2 rounded-md border-black focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300 ease-in-out hover:border-primary"
              {...register("video", { required: true })}
              placeholder="e.g: your video url"
            />
            {errors.video && (
              <p className="text-red-500">Video URL is required</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button type="submit" className="btn btn-lg">
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoursePage;
