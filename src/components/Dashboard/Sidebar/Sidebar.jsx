import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/logo.png";
import {
  adminOptions,
  riderOptions,
  partnerOptions,
} from "../../../constant/SideBarOptions";
import { Profile } from "../Profile/Profile";
export const Sidebar = () => {
  return (
    <div className=" w-[320px] shadow-xl flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-center py-3 bg-gray">
          <img src={logo} width={70} alt="" />
          <h1 className=" text-2xl font-semibold text-orange-500">
            Tasty Drop
          </h1>
        </div>
        <div className="flex flex-col  space-y-5 text-[16px]">
          {riderOptions.map((option, i) => (
            <NavLink
              to={option.path}
              key={i}
              className={` p-3  hover:text-orange-500 transition duration-200`}
              style={({ isActive }) => {
                return {
                  color: isActive ? "rgb(249 115 22)" : "",
                  borderRight: isActive ? "3px solid rgb(249 115 22)" : "",
                };
              }}>
              <option.icon size={20} className="inline-block mr-2" />
              {option.name}
            </NavLink>
          ))}
        </div>
      </div>
      <Profile />
    </div>
  );
};
