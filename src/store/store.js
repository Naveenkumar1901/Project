import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../store/toggleSlice";
import modalSlice from "./modalSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    modal: modalSlice,
  },
});
