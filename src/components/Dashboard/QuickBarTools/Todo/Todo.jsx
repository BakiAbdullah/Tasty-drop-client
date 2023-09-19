import React from "react";
import "../Settings/Settings.css";
import { RxCrossCircled } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { addTask } from "../../../../redux/feature/tasks/tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { TaskCard } from "../../../Cards/TaskCard";
export const Todo = ({ isShowTodo, setShowTodo }) => {
  const [taskName, setTaskName] = useState("");

  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasksSlice);

  const handleTask = (e) => {
    e.preventDefault();
    e.target.reset();
    const tasksData = {
      taskName: taskName,
    };
    dispatch(addTask(tasksData));
    setTaskName("");
  };
  return (
    <div
      className={`settings-panel ${
        isShowTodo ? "visible shadow-bar " : "invisible"
      } bg-white border border-slate-200 p-7 shadow-xl space-y-4 text-lg z-20 h-full lg:w-[350px] overflow-y-scroll `}>
      <span className="flex items-center  justify-between">
        <h1 className="text-slate-500">To-do-list</h1>
        <button onClick={() => setShowTodo(!isShowTodo)}>
          <RxCrossCircled className="hover:text-slate-500 " size={22} />
        </button>
      </span>
      <hr className="border border-slate-200" />
      {/*//* Content */}

      <form onSubmit={handleTask} className="flex items-center justify-between">
        <input
          required
          type="text"
          onChange={(e) => setTaskName(e.target.value)}
          className="rounded-tl-full rounded-bl-full border-zinc-300 focus:border-black   shadow-inner h-12  text-sm py-3 px-5 focus:ring-0 w-full"
          placeholder="enter task block"
        />
        <button
          type="submit"
          className=" bg-orange-500 py-[13px] px-3 rounded-r-lg text-white hover:bg-orange-600 transition-all ">
          <AiOutlinePlus size={22} />
        </button>
      </form>

      {/* tasks list */}
      {tasks.map((item, i) => (
        <TaskCard key={i} item={item} />
      ))}
    </div>
  );
};
