import { createSlice } from "@reduxjs/toolkit";

const checkOutSlice = createSlice({
  name: "checkOut",
  initialState: {
    shippingInfo: {
      email: "",
      phone: "",
      firstName: "",
      lastName: "",
      address: "",
      moreAddress: "",
      city: "",
      postalCode: "",
      country: "",
    },
  },
  reducers: {
    addInfo(state, action) {
      const newInfo = action.payload;
      state.shippingInfo.email = newInfo.email;
      state.shippingInfo.phone = newInfo.phone;
      state.shippingInfo.address = newInfo.address;
      state.shippingInfo.moreAddress = newInfo.moreAddress;
      state.shippingInfo.city = newInfo.city;
      state.shippingInfo.postalCode = newInfo.postalCode;
      state.shippingInfo.country = newInfo.country;
    },
  },
});

const { actions, reducer } = checkOutSlice;
export const { addInfo } = actions;
export default reducer;
