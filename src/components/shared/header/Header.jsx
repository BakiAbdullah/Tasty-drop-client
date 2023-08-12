import React from "react";
import logo from "../../../../public/logo.png";

import { AiFillHome } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import "../header/Header.css";
const Header = () => {
  return (
    <div className="flex justify-between items-center px-10  py-4 fixed w-full z-10">
      <div className="flex items-center  ">
        <img className="w-24" src={logo} alt="" />
        <h1 className="text-3xl font-semibold text-white">
          Tasty<span className="text-orange-500">Drop</span>
        </h1>
      </div>
      <div className="flex items-center  gap-5">
        <select class="px-3 py-2 rounded-md custom-select ">
          <option value="Partner With Us"> Partner With Us</option>
          <option value="Partner With Us">Riders</option>
          <option value="Partner With Us">Carriers</option>
        </select>
        <button className="text-lg btn-primary   inline-flex items-center gap-2">
          <AiFillHome size={18} />
          Sign up or Log in
        </button>
        <button className="text-lg btn-primary    duration-400 inline-flex items-center gap-2">
          <BiSolidUser size={18} />
          Profile
        </button>
      </div>
    </div>
  );
};

export default Header;
