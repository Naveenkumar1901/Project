import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";

export const signUpUser = createAsyncThunk("signupuser", async (user) => {
  const response = await axiosInstance("User/AddUser", {
    method: "POST",
    data: user,
  });
  return response.data;
});

export const loginUser = createAsyncThunk("loginuser", async (user) => {
  try {
    const response = await axiosInstance("/login", {
      method: "POST",
      data: user,
    });

    return response.data;
  } catch (error) {
    const err = error?.response?.data?.error ?? "Unknown error";
    throw new Error(err);
  }
});

export const authSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
    err: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      console.log("fulfilled", action.payload);
    });
    builder.addCase(signUpUser.pending, (state, action) => {
      console.log("pending", action.payload);
    });
    builder.addCase(signUpUser.rejected, (state, action) => {});
    builder.addCase(loginUser.fulfilled, (state, action) => {
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
      state.userInfo = action.payload;
    });
    builder.addCase(loginUser.pending, (state, action) => {
      console.log("pending", action.payload);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.err = action.error.message;
    });
  },
});

export default authSlice.reducer;
