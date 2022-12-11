import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../slices/themeSlice";
import toggleReducer from "../slices/toggleSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    color: themeSlice,
  },
});
