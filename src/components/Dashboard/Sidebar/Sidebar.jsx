import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";
import {
  adminOptions,
  riderOptions,
  partnerOptions,
  customerOptions,
} from "../../../constant/SideBarOptions";
import { Profile } from "../Profile/Profile";

import useAuth from "../../../api/useAuth";
import Hamburger from "hamburger-react";

export const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const { user, userRole, isLoading } = useAuth();
  console.log(userRole);

  let optionsArray = []; //it will contain the user role options.
  if (userRole === "partner") {
    optionsArray = partnerOptions;
  } else if (userRole === "rider") {
    optionsArray = riderOptions;
  } else if (userRole === "admin") {
    optionsArray = adminOptions;
  } else if (userRole === "customer") {
    optionsArray = customerOptions;
  }

  return (
    <div
      className={`${
        showSidebar ? "-translate-x-[100%]   h-[100%]" : ""
      } lg:w-[290px] w-[240px] fixed shadow-xl h-[100%] flex flex-col justify-between bg-white transition-transform duration-300 ease-in-out z-10 dark-bg `}>
      <div>
        <div className="flex items-center justify-center lg:py-2 py-2 bg-gray gap-3 dark-bar">
          <Link className="flex items-center gap-1" to="/">
            <img src={logo} className="lg:w-20 w-14" alt="" />
            <h1 className=" lg:text-2xl text-lg font-bold text-orange-500 font-Fredoka">
              TastyDrop
            </h1>
          </Link>
          <button className="bg-black/10 rounded-full lg:hidden text-black/50 ">
            <Hamburger
              toggle={() => setShowSidebar(!showSidebar)}
              size={18}
              toggled
            />
          </button>
        </div>
        <div className="flex flex-col lg:space-y-4 space-y-2 text-[16px]">
          {/* Sidebar will Render dynamically based on roles */}
          {!isLoading &&
            optionsArray.map((option, i) => (
              <NavLink
                to={option.path}
                key={i}
                className={`p-3 dark-icon  hover:text-orange-400 transition duration-200 flex items-center gap-3 text-sm lg:text-base`}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "rgb(249 115 22)" : "",
                    borderRight: isActive ? "3px solid rgb(249 115 22)" : "",
                  };
                }}>
                <option.icon size={20} />
                {option.name}
              </NavLink>
            ))}
        </div>
      </div>

      <Profile />
    </div>
  );
};
