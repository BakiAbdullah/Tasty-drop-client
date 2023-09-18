import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

export const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const isExist = state.carts.find(item => item._id === payload._id)
            if (isExist) {
                isExist.quantity++
                isExist.menuTotalPrice = isExist.quantity * JSON.parse(isExist.menuItemPrice)
               
            }
            else {
                state.carts.push({ ...payload, quantity: 1,menuTotalPrice: JSON.parse(payload.menuItemPrice) })
            }
        },
        removeCart: (state, { payload }) => {
            state.carts = state.carts.filter(item => item._id !== payload)
        },
        clearData:(state)=>{
            state.carts = []
        }
    }
})

export const { addToCart, removeCart,clearData } = cartSlice.actions
export default cartSlice.reducer
