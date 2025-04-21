import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar hoặc Sidebar ở đây nếu cần */}
        <Outlet />
    </div>
  );
};

export default MainLayout;
