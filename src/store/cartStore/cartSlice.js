import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCart: 0,
  cart: [],
  active: false,
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
      state.active = false;
      state.totalCart = 0;
    },
    setActive(state) {
      state.active = true;
    },
  },
});

export const { addToCart, clearCart, increaseCart, decreaseCart, setActive } =
  cartSlice.actions;
export default cartSlice.reducer;
