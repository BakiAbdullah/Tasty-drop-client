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
  updateSubTaskStatus,
} from "../../redux/feature/tasks/tasksSlice";
export const TaskCard = ({ item }) => {
  const dispatch = useDispatch();

  // * States =>
  const [showAddTask, setShowAddTask] = useState(false);
  const [subTask, setSubTask] = useState("");

  // * Handling SubTask from here =>
  const handleSubTask = (e) => {
    e.preventDefault();
    const taskId = item.id;
    const subtaskName = subTask;
    dispatch(addSubtask({ taskId, subtaskName }));
    setShowAddTask(false);
    setShowAddTask(false);
  };

  // * Handling status updates from here =>
  const handleDone = ({ id, status }) => {
    dispatch(
      updateSubTaskStatus({
        taskId: item.id,
        subTaskId: id,
        status: status,
      })
    );
  };
  return (
    <div className="shadow-lg rounded-xl border border-slate-200 dark-content dark:border-zinc-600">
      {showAddTask ? (
        <>
          <form onSubmit={handleSubTask} className="flex items-center ">
            <input
              required
              onChange={(e) => setSubTask(e.target.value)}
              type="text"
              placeholder="sub task"
              className="text-sm w-full border-slate-200 rounded-tl-xl dark-input"
            />
            <button className="bg-slate-200  px-2 py-[9px] rounded-tr-xl">
              <MdDone size={20} />
            </button>
          </form>
        </>
      ) : (
        <>
          <span className="flex items-center justify-between p-2">
            <h1 className="text-sm font-semibold dark-title">
              {item.taskName}
            </h1>
            <button
              title="Add task"
              onClick={() => setShowAddTask(!showAddTask)}
              className="bg-slate-300 p-1 rounded-md">
              <AiOutlinePlus size={15} />
            </button>
          </span>
        </>
      )}
      <hr className="border-slate-300  " />
      {item.subTask?.map((subTask) => (
        <div
          key={subTask.id}
          className="text-sm px-4 py-2 space-y-1 text-slate-600">
          <span className="flex items-center gap-2 ">
            <input
              title="done"
              onChange={() =>
                handleDone({
                  id: subTask.id,
                  status: subTask.status === "pending" ? "done" : "pending",
                })
              }
              type="checkbox"
              name="done"
              className="rounded-full text-orange-500 "
              checked={subTask.status === "done" && true}
            />

            <p
              className={`text-sm border-none outline-none focus:outline-none dark-text ${
                subTask.status === "done" && "line-through"
              }`}>
              {subTask.name}
            </p>
          </span>
        </div>
      ))}
      <hr className="border-slate-200   " />
      <button
        title="delete"
        onClick={() => dispatch(removeTask(item.id))}
        className="ml-auto block mr-2 bg-rose-400 text-white p-2 rounded-full hover:bg-rose-500 duration-200 transition-colors my-1">
        <FaTrash size={12} />
      </button>
    </div>
  );
};
