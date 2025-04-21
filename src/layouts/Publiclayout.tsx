import React from "react";
import bg from "../assets/Login-bg.jpg"
import { Outlet } from "react-router-dom";
const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center"
         style={{  backgroundImage: `url(${bg})`   }}>
      <Outlet />
    </div>
  );
};

export default PublicLayout;
