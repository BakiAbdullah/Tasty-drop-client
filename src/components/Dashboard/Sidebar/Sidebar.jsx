import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";
import {
  adminOptions,
  riderOptions,
  partnerOptions,
  businessOptions,
} from "../../../constant/SideBarOptions";
import { Profile } from "../Profile/Profile";
export const Sidebar = ({ showSidebar }) => {
  return (
    <div
      className={`${
        showSidebar ? "-translate-x-[100%]   h-[100%]" : ""
      } lg:w-[290px] w-[200px] absolute shadow-xl h-[100%] flex flex-col justify-between bg-white transition-transform duration-300 ease-in-out`}
    >
      <div>
        <Link to="/">
          <div className="flex items-center justify-center py-3 bg-gray">
            <img src={logo} className="lg:w-20 w-14" alt="" />
            <h1 className=" lg:text-2xl text-lg font-semibold text-orange-500">
              Tasty Drop
            </h1>
          </div>
        </Link>
        <div className="flex flex-col space-y-4 text-[16px]">
          {/* Sidebar will Render dynamically based on roles (coming soon!) */}
          {partnerOptions.map((option, i) => (
            <NavLink
              to={option.path}
              key={i}
              className={` p-3  hover:text-orange-500 transition duration-200 flex items-center gap-3`}
              style={({ isActive }) => {
                return {
                  color: isActive ? "rgb(249 115 22)" : "",
                  borderRight: isActive ? "3px solid rgb(249 115 22)" : "",
                };
              }}
            >
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
