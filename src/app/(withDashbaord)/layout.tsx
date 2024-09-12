"use client";
import React, { ReactNode } from "react";
import DashboardSidebar from "../components/UI/Dashboard/DashboardSidebar";

type TLayoutProps={
    children: ReactNode
}

const Layout = ({children}:TLayoutProps) => {
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
