import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Dashboard/SideBar/Sidebar";
import { DashboardNav } from "../components/Dashboard/Navbar/DashboardNav";
import { useState } from "react";
import "../components/Dashboard/Dashboard.css";
import { QuickBar } from "../components/Dashboard/QuickBar/QuickBar";
import CurrentPath from "../components/Utils/CurrentPath";
const DashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="flex justify-between transition-transform duration-500 ease-in-out">
      <Sidebar showSidebar={showSidebar} />
      <div
        className={`ml-auto w-full custom-sidebar-animation  ${
          showSidebar ? "sidebar-open" : "sidebar-closed"
        }`}>
        <DashboardNav
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
        <div className="bg-gray min-h-[calc(100vh-73px)] p-8 ">
          <CurrentPath />
          <Outlet />
        </div>
      </div>
      <QuickBar />
    </div>
  );
};

export default DashboardLayout;
