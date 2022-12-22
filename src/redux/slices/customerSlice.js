import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";

export const createCustomer = createAsyncThunk(
  "createcustomer",
  async (customer) => {
    let userToken = JSON.parse(localStorage.getItem("currentUser"));
    try {
      const response = await axiosInstance("/Customer/AddCustomer", {
        method: "POST",
        data: customer,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken.access_token}`,
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      const createCustomerError =
        error?.response?.data?.error ?? "Unknown error";
      throw new Error(createCustomerError);
    }
  }
);

export const getCustomerDetails = createAsyncThunk(
  "getcustomerdetails",
  async (customer) => {
    let userToken = JSON.parse(localStorage.getItem("currentUser"));
    try {
      const response = await axiosInstance("/GetCustomerServList", {
        method: "GET",
        data: customer,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken.access_token}`,
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      const createCustomerError = error?.response?.data ?? "Unknown error";
      throw new Error(createCustomerError);
    }
  }
);

export const serviceBooking = createAsyncThunk(
  "servicebooking",
  async (customer) => {
    let userToken = JSON.parse(localStorage.getItem("currentUser"));
    try {
      const response = await axiosInstance("/AddService", {
        method: "POST",
        data: customer,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken.access_token}`,
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      const serviceBookingError =
        error?.response?.data?.error ?? "Unknown error";
      throw new Error(serviceBookingError);
    }
  }
);

export const customerSlice = createSlice({
  name: "customer",
  initialState: {
    createCustomerErr: "",
    serviceBookingErr: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createCustomer.fulfilled, (state, action) => {});

    builder.addCase(createCustomer.pending, (state, action) => {});

    builder.addCase(createCustomer.rejected, (state, action) => {
      state.createCustomerErr = action.error.message;
    });
    builder.addCase(serviceBooking.fulfilled, (state, action) => {});

    builder.addCase(serviceBooking.pending, (state, action) => {});

    builder.addCase(serviceBooking.rejected, (state, action) => {
      state.serviceBookingErr = action.error.message;
    });
  },
});
export default customerSlice.reducer;
