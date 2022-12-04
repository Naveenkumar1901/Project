import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSidebar: true,
};

export const toggleSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
  },
});

export const { toggleSideBar } = toggleSlice.actions;

export default toggleSlice.reducer;
