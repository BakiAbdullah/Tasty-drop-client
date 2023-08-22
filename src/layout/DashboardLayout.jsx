import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Dashboard/SideBar/Sidebar";
import { QuickBar } from "../components/Dashboard/Quickbar/Quickbar";
import { DashboardNav } from "../components/Dashboard/Navbar/DashboardNav";

const DashboardLayout = () => {
  return (
    <div className="flex justify-between ">
      <Sidebar />
      <div className="w-full">
        <DashboardNav />
        <div className="bg-gray min-h-[calc(100vh-73px)] p-8">
          <Outlet />
        </div>
      </div>
      <QuickBar />
    </div>
  );
};

export default DashboardLayout;
