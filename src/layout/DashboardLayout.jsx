import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Dashboard/SideBar/Sidebar";
import { DashboardNav } from "../components/Dashboard/Navbar/DashboardNav";
import { useState } from "react";
import "../components/Dashboard/Dashboard.css";
import { QuickBar } from "../components/Dashboard/QuickBar/QuickBar";
import CurrentPath from "../components/Utils/CurrentPath";
import { useEffect } from "react";
const DashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showQuickBar, setShowQuickBar] = useState(false);
  const toggleSidebarForSmallDevice = () => {
    if (window.innerWidth < 640) {
      // Adjust the breakpoint as needed
      setShowSidebar(true);
      setShowQuickBar(true);
    }
  };
  useEffect(() => {
    toggleSidebarForSmallDevice();

    window.addEventListener("resize", toggleSidebarForSmallDevice);

    return () => {
      window.removeEventListener("resize", toggleSidebarForSmallDevice);
    };
  }, []);
  return (
    <div className="flex justify-between transition-transform duration-500 ease-in-out">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`${
          !showQuickBar ? "pr-[68px]" : "pr-0"
        }  ml-auto w-full custom-sidebar-animation  ${
          showSidebar ? "sidebar-open" : "sidebar-closed"
        }`}>
        <DashboardNav
          showQuickBar={showQuickBar}
          setShowQuickBar={setShowQuickBar}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
        <div className="bg-gray min-h-[calc(100vh-88px)] p-8 space-y-5">
          <CurrentPath />
          <Outlet />
        </div>
      </div>

      <QuickBar showQuickBar={showQuickBar} setShowQuickBar={setShowQuickBar} />
    </div>
  );
};

export default DashboardLayout;
