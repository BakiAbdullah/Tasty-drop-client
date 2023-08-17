import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name:'users',
    initialState:{
        user: null ,
        loading: true
    },
    reducers:{
        addUser: (state,action)=>{
            state.user = action.payload
        },
        isLoading : (state,action)=>{
            state.loading = action.payload
        }
    }
})
export const {addUser,isLoading} = userSlice.actions 
export default userSlice.reducer