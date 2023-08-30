import React, { useState } from "react";
import { FcTodoList } from "react-icons/fc";
import { BsBell } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { Settings } from "../QuickBarTools/Settings/Settings";
import { Todo } from "../QuickBarTools/Todo/Todo";

export const QuickBar = () => {
  const [isShowTodo, setShowTodo] = useState(false);
  const [isShowRemainder, setShowRemainder] = useState(false);
  const [isShowSetting, setShowSetting] = useState(false);
  const [isShowNotes, setShowNotes] = useState(false);
  const options = [
    {
      name: "ToDo-List",
      icon: FcTodoList,
      onClick: () => setShowTodo(!isShowTodo),
    },
    {
      name: "Reminder",
      icon: BsBell,
      onClick: () => setShowRemainder(!isShowRemainder),
    },
    {
      name: "Setting",
      icon: IoSettingsOutline,
      onClick: () => setShowSetting(!isShowSetting),
    },
    {
      name: "Launch Note",
      icon: BsPencil,
      onClick: () => setShowNotes(!isShowNotes),
    },
  ];
  return (
    <>
      <div className="flex flex-col  border-l p-4 space-y-5  border-black/20 fixed right-0 top-0 z-10 h-full bg-white ">
        {options.map((option, i) => (
          <button
            onClick={option.onClick}
            key={i}
            className="hover:bg-black/20  transition-all rounded-full p-2 ">
            <option.icon size={20} />
          </button>
        ))}

        {/* Handle The Setting Menu From Here */}
      </div>
      <Todo isShowTodo={isShowTodo} setShowTodo={setShowTodo} />
      <Settings isShowSetting={isShowSetting} setShowSetting={setShowSetting} />
    </>
  );
};
