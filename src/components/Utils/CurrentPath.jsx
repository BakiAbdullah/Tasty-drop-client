import React from "react";
import { useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";

const CurrentPath = () => {
  const location = useLocation();

  const formattedPath = location.pathname.slice(1).replace(/\//g, " / ");
  //This will be remove first slash and replace all slashes with slash and space

  return (
    <h1 className="inline-flex items-center gap-1 text-slate-400   capitalize  text-sm">
      <RxDashboard />
      <span>{formattedPath}</span>
    </h1>
  );
};

export default CurrentPath;
