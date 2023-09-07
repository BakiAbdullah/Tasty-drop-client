import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  id: 0,
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks.push({ id: state.id, ...payload, subTask: [] });
      state.id++;
    },
    addSubtask: (state, { payload }) => {
      const { taskId, subtaskName } = payload;
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        if (task.subTask.length === 0) {
          task.subTask.push({ id: 1, name: subtaskName, status: "pending" });
        } else {
          const lastElement = task.subTask.at(-1);
          task.subTask.push({
            id: lastElement.id + 1,
            name: subtaskName,
            status: "pending",
          });
        }
      }
    },
    removeTask: (state, { payload }) => {
      const filteredItem = state.tasks.filter((item) => item.id !== payload);
      state.tasks = filteredItem;
    },
    updateSubTaskStatus: (state, { payload }) => {
      const task = state.tasks.find((item) => item.id === payload.taskId);
      if (task) {
        const subTask = task.subTask.find(
          (item) => item.id === payload.subTaskId
        );
        if (subTask) {
          subTask.status = payload.status;
        }
      }
    },
  },
});

export const { addTask, addSubtask, removeTask, updateSubTaskStatus } =
  tasksSlice.actions;
export default tasksSlice.reducer;
