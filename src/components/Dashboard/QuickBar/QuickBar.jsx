import { useState } from "react";
import { FcTodoList } from "react-icons/fc";

import { BsPencil } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { Settings } from "../QuickBarTools/Settings/Settings";
import { Todo } from "../QuickBarTools/Todo/Todo";
import Notes from "../QuickBarTools/Notes/Notes";

export const QuickBar = ({ showQuickBar, setShowQuickBar }) => {
  const [isShowTodo, setShowTodo] = useState(false);
  const [isShowSetting, setShowSetting] = useState(false);
  const [isShowNotes, setShowNotes] = useState(false);
  const options = [
    {
      name: "ToDo-List",
      icon: FcTodoList,
      onClick: () => {
        setShowTodo(!isShowTodo);
        setShowSetting(false);
        setShowNotes(false);
      },
    },
    {
      name: "Setting",
      icon: IoSettingsOutline,
      onClick: () => {
        setShowSetting(!isShowSetting);
        setShowTodo(false);
        setShowNotes(false);
      },
    },
    {
      name: "Launch Note",
      icon: BsPencil,
      onClick: () => {
        setShowNotes(!isShowNotes);
        setShowTodo(false);
        setShowSetting(false);
      },
    },
  ];
  return (
    <>
      <div
        className={`${
          !showQuickBar ? "" : "translate-x-[100%]"
        } flex flex-col  border-l p-4 space-y-5  border-black/20 fixed right-0 top-0 z-10 h-full bg-white custom-sidebar-animation dark-bar`}>
        {options.map((option, i) => (
          <button
            title={option.name}
            onClick={option.onClick}
            key={i}
            className="hover:bg-black/20 dark-icon  transition-all rounded-full p-2 ">
            <option.icon size={20} />
          </button>
        ))}

        {/* Handle The Setting Menu From Here */}
      </div>
      <Todo isShowTodo={isShowTodo} setShowTodo={setShowTodo} />
      <Settings
        showQuickBar={showQuickBar}
        setShowQuickBar={setShowQuickBar}
        isShowSetting={isShowSetting}
        setShowSetting={setShowSetting}
      />
      <Notes isShowNotes={isShowNotes} setShowNotes={setShowNotes} />
    </>
  );
};
