import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "./userSlice";
import cartReducer from "./feature/cartSlice";
import { roleApis } from "./feature/roleApis";
import tasksSlice from "./feature/tasks/tasksSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    tasksSlice: tasksSlice,
    carts: cartReducer,
    [roleApis.reducerPath]: roleApis.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    const issue = getDefaultMiddleware({
      serializableCheck: false, //comment out this line and checkout browser console
    });
    const roleApisMiddleware = roleApis.middleware;
    // return getDefaultMiddleware().concat(roleApis.middleware)
    return [...issue, roleApisMiddleware];
  },
});
setupListeners(store.dispatch);

export default store;
