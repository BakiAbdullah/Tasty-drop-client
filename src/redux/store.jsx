import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import cartReducer from "./feature/cartSlice";
import { roleApis } from "./feature/roleApis";

import tasksSlice from "./feature/tasks/tasksSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    useSlice: userSlice,
    tasksSlice: tasksSlice,
    carts: cartReducer,
    [roleApis.reducerPath]: roleApis.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(roleApis.middleware),
});
setupListeners(store.dispatch);

export default store;
