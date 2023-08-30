import React from "react";
import "../Settings/Settings.css";
import { RxCrossCircled } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { useState } from "react";
export const Todo = ({ isShowTodo, setShowTodo }) => {
  const [taskName, setTaskName] = useState("");
  const [showAddTask, setShowAddTask] = useState(true);

  const handleSubTask = () => {
    setShowAddTask(false);
  };
  return (
    <div
      className={`settings-panel ${
        isShowTodo ? "visible" : "invisible"
      } bg-white border border-slate-200 p-7 shadow-xl space-y-4 text-lg z-20 h-full lg:w-[350px]`}>
      <span className="flex items-center  justify-between">
        <h1 className="text-slate-500">To-do-list</h1>
        <button onClick={() => setShowTodo(!isShowTodo)}>
          <RxCrossCircled className="hover:text-slate-500 " size={22} />
        </button>
      </span>
      <hr className="border border-slate-200" />
      {/*//* Content */}

      <div className="flex items-center justify-between">
        <input
          type="text"
          onChange={(e) => setTaskName(e.target.value)}
          className="rounded-l-lg w-full text-sm border-slate-300 bg-slate-100"
          placeholder="enter task block"
        />
        <button className=" bg-orange-500 py-[8px] px-3 rounded-r-lg text-white hover:bg-orange-600 transition-all ">
          <AiOutlinePlus size={22} />
        </button>
      </div>

      {/* tasks list */}
      <div className="shadow-lg rounded-xl border border-slate-200">
        {showAddTask ? (
          <>
            <div className="flex items-center ">
              <input
                type="text"
                placeholder="sub task"
                className="text-sm w-full border-slate-200 rounded-tl-xl"
              />
              <button
                onClick={handleSubTask}
                className="bg-slate-200  px-2 py-2 rounded-tr-xl">
                <MdDone size={20} />
              </button>
            </div>
          </>
        ) : (
          <span className="flex items-center justify-between p-2">
            <h1 className="text-sm font-semibold">Change Price</h1>
            <button
              onClick={() => setShowAddTask(!showAddTask)}
              className="bg-slate-300 p-1 rounded-md">
              <AiOutlinePlus size={15} />
            </button>
          </span>
        )}
        <hr className="border-slate-200 border" />
        <div className="text-sm p-4 space-y-1 text-slate-600">
          <span className="flex items-center justify-between">
            <p className="text-sm border-none outline-none focus:outline-none line-through">
              task1
            </p>
            <MdDone size={15} className="cursor-pointer" />
          </span>
          <span className="flex items-center justify-between">
            <p className="text-sm border-none outline-none focus:outline-none">
              task1
            </p>
            <MdDone size={15} className="cursor-pointer" />
          </span>
          <span className="flex items-center justify-between">
            <p className="text-sm border-none outline-none focus:outline-none">
              task1
            </p>
            <MdDone size={15} className="cursor-pointer" />
          </span>

          <hr className="border-slate-100 border" />
        </div>
      </div>
    </div>
  );
};
