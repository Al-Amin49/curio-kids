
import React, { ReactNode } from "react";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Foooter";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar/>
     <div className="min-h-screen">
     {children}
     </div>
     <Footer/>
    </div>
  );
};

export default layout;