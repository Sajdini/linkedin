import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
const store = configureStore({
  reducer: { authorization: authSlice.reducer },
});

export default store;
