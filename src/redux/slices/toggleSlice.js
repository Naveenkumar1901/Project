import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSidebar: true,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
  },
});

export const { toggleSideBar } = toggleSlice.actions;

export default toggleSlice.reducer;
