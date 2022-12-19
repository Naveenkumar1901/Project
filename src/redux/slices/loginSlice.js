import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginMobileNumber: "",
  loginPassword: "",
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
};

export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    mobileNumber: (state, data) => {
      state.loginMobileNumber(data.payload);
    },
  },
  extraReducers: {
    password: (state, data) => {
      state.loginPassword(data.payload);
    },
  },
});

export const { mobileNumber, password } = loginSlice.actions;
export default loginSlice.reducer;
