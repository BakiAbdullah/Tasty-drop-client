import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Dashboard/SideBar/Sidebar";
import { QuickBar } from "../components/Dashboard/Quickbar/Quickbar";

const DashboardLayout = () => {
  return (
    <div className="flex justify-between ">
      <Sidebar />
      <Outlet />
      <QuickBar />
    </div>
  );
};

export default DashboardLayout;
