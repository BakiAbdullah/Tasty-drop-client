import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  isLoading: true,
  isError: false,
  error: "",
};

// export const

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload;
    },
    isLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});
export const { addUser, isLoading } = userSlice.actions;
export default userSlice.reducer;
