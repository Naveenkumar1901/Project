import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import themeSlice from "../slices/themeSlice";
import toggleReducer from "../slices/toggleSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    color: themeSlice,
    user: authSlice,
  },
});
