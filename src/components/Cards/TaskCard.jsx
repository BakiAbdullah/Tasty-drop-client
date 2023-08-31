import React from "react";
import { MdDone } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
export const TaskCard = ({ item }) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const handleSubTask = () => {
    setShowAddTask(false);
  };

  return (
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
          <h1 className="text-sm font-semibold">{item.taskName}</h1>
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
  );
};
