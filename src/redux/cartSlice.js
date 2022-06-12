import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // showMiniCart: false,
    cartItems: [],
  },
  reducers: {
    // showMiniCart(state) {
    //   state.showMiniCart = true;
    // },
    // hideMiniCart(state) {
    //   state.showMiniCart = false;
    // },
    addToCart(state, action) {
      // newItem = {id, product, quantity}
      const newItem = action.payload;
      const index = state.cartItems.findIndex((item) => item.id === newItem.id);
      if (index === -1) {
        state.cartItems.push(newItem);
      }
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      }
    },

    setQuantity(state, action) {
      const { id, quantity } = action.payload;

      const index = state.cartItems.findIndex((item) => item.id === id);
      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
    },

    increaseQuantity(state, action) {
      const { id } = action.payload;
      const index = state.cartItems.findIndex((item) => item.id === id);
      if (index >= 0) {
        state.cartItems[index].quantity += 1;
      }
    },

    removeFromCart(state, action) {
      const removedId = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== removedId);
    },
  },
});

const { actions, reducer } = cartSlice;
export const {
  //   showMiniCart,
  //   hideMiniCart,
  addToCart,
  setQuantity,
  increaseQuantity,
  removeFromCart,
} = actions;

export default reducer;
