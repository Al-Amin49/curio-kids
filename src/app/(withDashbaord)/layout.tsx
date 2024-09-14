"use client";
import React, { ReactNode } from "react";
import DashboardSidebar from "../components/UI/Dashboard/DashboardSidebar";
import { useAuth } from "@/lib/AuthProvider";
import AdminSideBar from "../components/UI/Dashboard/AdminSidebar";
import InstructorSidebar from "../components/UI/Dashboard/InstructorSidebar";

type TLayoutProps={
    children: ReactNode
}

const Layout = ({children}:TLayoutProps) => {
  const {user}= useAuth();
  const renderSidebar=()=>{
    if(user?.role==='admin'){
      return <AdminSideBar/>
    }
    else if(user?.role==='instructor'){
      return <InstructorSidebar/>
    }
    else{
      return <DashboardSidebar/>
    }
  }
  return (
    <div className="flex h-screen">
      {renderSidebar()}
      <div className="flex-1 p-8 overflow-y-auto">
       
        {children}
      </div>
    </div>
  );
};

export default Layout;
