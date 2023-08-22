import React from "react";
import { CiMail } from "react-icons/ci";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { PiBellSimpleRingingLight } from "react-icons/pi";
export const DashboardNav = () => {
  return (
    <div className="  flex justify-between items-center p-4">
      <button className="hover:bg-black/20 transition-all rounded-full p-2">
        <HiOutlineMenuAlt2 size={25} />
      </button>
      <div className="flex  items-center space-x-8">
        <button className="hover:bg-black/20  transition-all rounded-full p-2">
          <CiMail size={24} />
        </button>
        <button className="hover:bg-black/20  transition-all rounded-full p-2">
          <PiBellSimpleRingingLight size={24} />
        </button>
        <button className="hover:bg-black/20  transition-all rounded-full p-2">
          <BiUser size={24} />
        </button>
      </div>
    </div>
  );
};
