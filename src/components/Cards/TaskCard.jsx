import React from "react";
import { MdDone } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addSubtask,
  addTask,
  removeTask,
} from "../../redux/feature/tasks/tasksSlice";
export const TaskCard = ({ item }) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [subTask, setSubTask] = useState("");
  const dispatch = useDispatch();
  const handleSubTask = (e) => {
    e.preventDefault();
    const taskId = item.id;
    const subtaskName = subTask;
    dispatch(addSubtask({ taskId, subtaskName }));

    setShowAddTask(false);
    setShowAddTask(false);
  };

  const handleDone = () => {};
  return (
    <div className="shadow-lg rounded-xl border border-slate-200">
      {showAddTask ? (
        <>
          <form onSubmit={handleSubTask} className="flex items-center ">
            <input
              required
              onChange={(e) => setSubTask(e.target.value)}
              type="text"
              placeholder="sub task"
              className="text-sm w-full border-slate-200 rounded-tl-xl"
            />
            <button className="bg-slate-200  px-2 py-2 rounded-tr-xl">
              <MdDone size={20} />
            </button>
          </form>
        </>
      ) : (
        <>
          <span className="flex items-center justify-between p-2">
            <h1 className="text-sm font-semibold">{item.taskName}</h1>
            <button
              onClick={() => setShowAddTask(!showAddTask)}
              className="bg-slate-300 p-1 rounded-md">
              <AiOutlinePlus size={15} />
            </button>
          </span>
        </>
      )}
      {item.subTask?.map((subTask) => (
        <div
          key={subTask.id}
          className="text-sm px-4 py-2 space-y-1 text-slate-600">
          <span className="flex items-center gap-2 ">
            <input
              type="checkbox"
              name="done"
              className="rounded-full "
              checked={subTask.status === "done" && true}
            />
            <p
              className={`text-sm border-none outline-none focus:outline-none ${
                subTask.status === "done" && "line-through"
              }`}>
              {subTask.name}
            </p>
          </span>
        </div>
      ))}
      <hr className="border-slate-100 border " />
      <button
        onClick={() => dispatch(removeTask(item.id))}
        className="ml-auto block mr-2 bg-rose-400 text-white p-2 rounded-full hover:bg-rose-500 duration-200 transition-colors my-2">
        <FaTrash size={12} />
      </button>
    </div>
  );
};
