"use client";
import React, { ReactNode } from "react";
import DashboardSidebar from "../components/UI/Dashboard/DashboardSidebar";
import { useAuth } from "@/lib/AuthProvider";

type TLayoutProps={
    children: ReactNode
}

const Layout = ({children}:TLayoutProps) => {
  const {user}= useAuth();
  return (
    <div className="flex h-screen">
      <DashboardSidebar/>
      <div className="flex-1 p-8 overflow-y-auto">
       
        {children}
      </div>
    </div>
  );
};

export default Layout;
