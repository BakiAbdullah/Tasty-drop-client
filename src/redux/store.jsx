import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "./userSlice";
import { roleApis } from "./feature/roleApis";

const store = configureStore({
  reducer: {
    user: userReducer,
    [roleApis.reducerPath]: roleApis.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    const issue = getDefaultMiddleware({
      serializableCheck: false  //comment out this line and checkout browser console 
    })
    const roleApisMiddleware  = roleApis.middleware
    // return getDefaultMiddleware().concat(roleApis.middleware)
    return [...issue,roleApisMiddleware]
  },
});
setupListeners(store.dispatch);

export default store;
