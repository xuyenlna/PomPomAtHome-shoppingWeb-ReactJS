import { createSelector } from "@reduxjs/toolkit";

const cartItemSelector = (state) => state.cart.cartItems;

// count number of products in cart
// export const cartItemsCountSelector = createSelector(
//   cartItemSelector,
//   (cartItems) => cartItems.reduce((count, item) => count + item.quantity, 0)
// );

// calculate total amount of products in cart
export const cartItemTotalSelector = createSelector(
  cartItemSelector,
  (cartItems) =>
    cartItems.reduce(
      (total, item) => total + item.quantity * item.product.salePrice,
      0
    )
);
