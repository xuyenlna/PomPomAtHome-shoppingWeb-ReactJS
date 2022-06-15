import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";
import checkOutReducer from "./checkOutSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    checkOut: checkOutReducer,
  },
});

export default store;
