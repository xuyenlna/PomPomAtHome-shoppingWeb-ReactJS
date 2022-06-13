import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    showTextErrors: false,
  },
  reducers: {
    addToCart(state, action) {
      // newItem = {id, product, quantity, size}
      const newItem = action.payload;
      const index = state.cartItems.findIndex(
        (item) => item.id === newItem.id && item.size === newItem.size
      );
      if (index === -1) {
        state.cartItems.push(newItem);
      }
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      }
    },

    setQuantity(state, action) {
      const { id, quantity, size } = action.payload;

      const index = state.cartItems.findIndex(
        (item) => item.id === id && item.size === size
      );
      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
    },

    increaseQuantity(state, action) {
      const { id, size } = action.payload;
      const index = state.cartItems.findIndex(
        (item) => item.id === id && item.size === size
      );
      if (index >= 0) {
        state.cartItems[index].quantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      const { id, size } = action.payload;
      const index = state.cartItems.findIndex(
        (item) => item.id === id && item.size === size
      );
      if (index >= 0 && state.cartItems[index].quantity > 0) {
        state.cartItems[index].quantity -= 1;
      }
    },

    removeFromCart(state, action) {
      const { id, size } = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== id || item.size !== size
      );
    },

    showTextErrors(state) {
      state.showTextErrors = true;
    },
  },
});

const { actions, reducer } = cartSlice;
export const {
  addToCart,
  setQuantity,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  showTextErrors,
} = actions;

export default reducer;
