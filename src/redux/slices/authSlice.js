import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";

export const signUpUser = createAsyncThunk("signupuser", async (user) => {
  const response = await axiosInstance("User/AddUser", {
    method: "POST",
    data: user,
  });
  return await response.data;
});

export const authSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {},
});

export default authSlice.reducer;
