import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import LeftSidebar from "../../Components/SideBar/LeftSidebar";
import RightSidebar from "../../Components/SideBar/RightSidebar";

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const location = useLocation();

  const routeTitles = {
    "/filespage": "Files",
    "/watchvideos": "Watch Videos",
  };

  const title = routeTitles[location.pathname] || "Group";
  return (
    <>
      <Navbar title={title} collapsed={collapsed} />
      <LeftSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className={`feed ${collapsed ? "sidebarOpen" : ""}`}>
        <Outlet />
      </div>
      <RightSidebar />
    </>
  );
};

export default Layout;
