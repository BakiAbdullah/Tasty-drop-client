import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isExist = state.carts.find((item) => item._id === payload._id);
      if (isExist) {
        isExist.quantity++;
        isExist.menuItemPrice = isExist.quantity * isExist.menuItemPrice;
      } else {
        state.carts.push({ ...payload, quantity: 1 });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
