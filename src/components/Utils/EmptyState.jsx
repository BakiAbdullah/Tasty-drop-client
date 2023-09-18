import React from "react";

import { Link, useLocation } from "react-router-dom";
const EmptyState = ({ imageSrc, message, address, label, text }) => {
  const location = useLocation();
  return (
    <div
      className={`${
        location.pathname.includes("dashboard")
          ? "min-h-[calc(100vh-200px)]"
          : "min-h-screen"
      } gap-3 flex flex-col justify-center items-center  `}>
      <img className="w-16" src={imageSrc} alt="" />
      <h1 className="text-lg lg:text-xl font-bold text-zinc-800">{text}</h1>
      <p className="text-zinc-800  text-sm font-medium ">{message}</p>
      <Link to={address}>
        <button> {label} </button>
      </Link>
    </div>
  );
};

export default EmptyState;
