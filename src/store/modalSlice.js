import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: true,
};

export const modalSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    modalToggle: (state) => {
      state.closeModal = !state.closeModal;
    },
  },
});

export const { toggleSideBar } = modalSlice.actions;

export default modalSlice.reducer;
