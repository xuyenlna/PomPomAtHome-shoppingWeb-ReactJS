import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../api/userApi";
import { STORAGE_KEYS } from "../utility/constants";

export const register = createAsyncThunk("user/register", async (payload) => {
  //call Api to register
  const data = await userApi.register(payload);

  // save data to local storeage
  localStorage.setItem(STORAGE_KEYS.TOKEN, data.data.token);
  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(payload));

  return payload;
});

export const login = createAsyncThunk("user/login", async (payload) => {
  //call Api to register
  const data = await userApi.login(payload);

  // save data to local storeage
  localStorage.setItem(STORAGE_KEYS.TOKEN, data.data.token);
  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(payload));

  return payload;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem(STORAGE_KEYS.USER)) || {},
    settings: {},
  },
  reducers: {
    logout(state) {
      localStorage.removeItem(STORAGE_KEYS.TOKEN);
      localStorage.removeItem(STORAGE_KEYS.USER);
      state.current = {};
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
