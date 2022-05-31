import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    fabricFiltered: [],
    colorFiltered: [],
    sizeFiltered: [],
    sortNameAZ: [],
    sortPriceAsc: [],
    sortPriceDesc: [],
  },
  reducers: {
    filterFabric: (state, action) => (state.fabricFiltered = action.payload),
    filterColor: (state, action) => (state.colorFiltered = action.payload),
    filterSize: (state, action) => (state.sizeFiltered = action.payload),
    sortNameAZ: (state, action) => (state.sortNameAZ = action.payload),
    sortPriceAsc: (state, action) => (state.sortPriceAsc = action.payload),
    sortNameDesc: (state, action) => (state.sortNameDesc = action.payload),
  },
});
