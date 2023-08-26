import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import userReducer from './userSlice';
import { roleApis } from './feature/roleApis';

const store = configureStore({
  reducer: {
    user: userReducer,
    [roleApis.reducerPath]: roleApis.reducer
  },
  middleware: getDefaultMiddleware =>{
    const issu = getDefaultMiddleware({
      serializableCheck: false
    })
    const roleApisMiddleware  = roleApis.middleware
    // const roleApisMiddleware  = getDefaultMiddleware().concat(roleApis.middleware)
    return [...issu,roleApisMiddleware]
  },
    
   
})
setupListeners(store.dispatch)

export default store