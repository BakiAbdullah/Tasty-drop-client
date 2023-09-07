import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "./userSlice";
import cartReducer from "./feature/cartSlice";
import { baseApi } from "./feature/baseApi";
import tasksSlice from "./feature/tasks/tasksSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    tasksSlice: tasksSlice,
    carts: cartReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
setupListeners(store.dispatch);

export default store;
