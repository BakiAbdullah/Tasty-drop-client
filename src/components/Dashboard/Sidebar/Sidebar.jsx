import React from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const options = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Restaurant List",
      path: "restaurants",
    },
    {
      name: "Users",
      path: "/dashboard",
    },
    {
      name: "Settings",
      path: "/dashboard",
    },
  ];
  return (
    <div className="p-10 bg-gray">
      <h1 className="pb-10 text-3xl">Tasty Drop</h1>
      <div className="flex flex-col  space-y-5 text-lg">
        {options.map((option, i) => (
          <NavLink
            to={option.path}
            key={i}
            className="bg-orange-500 p-2 rounded-lg text-white">
            {option.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
