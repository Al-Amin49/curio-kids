"use client";
import React from "react";
import DashboardSidebar from "./DashboardSidebar";

const DashboardPage = () => {
  return (
    <div className="flex h-screen">
      <DashboardSidebar />
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-6">Dashboard Main Content</h1>
        <p className="text-lg text-gray-600">
          Manage your data from here. Welcome to your dashboard!
        </p>
        {/* Example content to create scrolling */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold">Section {i + 1}</h2>
              <p className="mt-4 text-gray-500">
                Some description for this section.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
