import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCart: 0,
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseCart(state) {
      state.totalCart += 1;
    },
    decreaseCart(state) {
      if (state.totalCart >= 1) state.totalCart -= 1;
    },
    addToCart(state, { payload }) {
      state.cart.push(payload);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addToCart, clearCart, increaseCart, decreaseCart } =
  cartSlice.actions;
export default cartSlice.reducer;
