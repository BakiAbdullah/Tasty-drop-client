import React, { useState } from "react";
import { FcTodoList } from "react-icons/fc";
import { BsBell } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { Settings } from "../QuickBarTools/Settings/Settings";

export const QuickBar = () => {
  const [isShowSetting, setShowSetting] = useState(false);
  const options = [
    {
      name: "ToDo-List",
      icon: FcTodoList,
    },
    {
      name: "Reminder",
      icon: BsBell,
    },
    {
      name: "Setting",
      icon: IoSettingsOutline,
      onClick: () => setShowSetting(!isShowSetting),
    },
    {
      name: "Launch Note",
      icon: BsPencil,
    },
  ];
  return (
    <>
      <div className="flex flex-col  border-l p-4 space-y-5  border-black/20  ">
        {options.map((option, i) => (
          <button
            onClick={option.onClick}
            key={i}
            className="hover:bg-black/20  transition-all rounded-full p-2">
            <option.icon size={20} />
          </button>
        ))}

        {/* Handle The Setting Menu From Here */}
      </div>
      <Settings isShowSetting={isShowSetting} setShowSetting={setShowSetting} />
    </>
  );
};
