import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
