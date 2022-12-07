import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../store/toggleSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
  },
});
