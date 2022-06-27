import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "authorization",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
    },
  },
});

export const authSliceActions = authSlice.actions;
export default authSlice;
