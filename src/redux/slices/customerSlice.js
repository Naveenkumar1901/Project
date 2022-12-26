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
      console.log(response.data);
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
      const response = await axiosInstance("/Customer/GetCustomerServList", {
        method: "GET",
        data: customer,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken.access_token}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      const getCustomerDetailsError = error?.response?.data ?? "Unknown error";
      throw new Error(getCustomerDetailsError);
    }
  }
);

export const serviceBooking = createAsyncThunk(
  "servicebooking",
  async (customer) => {
    let userToken = JSON.parse(localStorage.getItem("currentUser"));
    try {
      const response = await axiosInstance("/Customer/AddService", {
        method: "POST",
        data: customer,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken.access_token}`,
        },
      });
      console.log(response.data);
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
    customerDetails: [],
    createCustomerErr: "",
    serviceBookingErr: "",
    getCustomerDetailsErr: "",
    customerLoading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createCustomer.fulfilled, (state, action) => {
      state.customerLoading = false;
    });

    builder.addCase(createCustomer.pending, (state, action) => {
      state.customerLoading = true;
    });

    builder.addCase(createCustomer.rejected, (state, action) => {
      state.customerLoading = false;
      state.createCustomerErr = action.error.message;
    });

    builder.addCase(serviceBooking.fulfilled, (state, action) => {
      state.customerLoading = false;
    });

    builder.addCase(serviceBooking.pending, (state, action) => {
      state.customerLoading = true;
    });

    builder.addCase(serviceBooking.rejected, (state, action) => {
      state.customerLoading = false;
      state.serviceBookingErr = action.error.message;
    });

    builder.addCase(getCustomerDetails.fulfilled, (state, action) => {
      // customerDetails.forEach(()=>)
      state.customerDetails = action.payload;
      state.customerLoading = false;
    });

    builder.addCase(getCustomerDetails.pending, (state, action) => {
      state.customerLoading = true;
    });

    builder.addCase(getCustomerDetails.rejected, (state, action) => {
      state.customerLoading = false;
      state.getCustomerDetailsErr = action.error.message;
    });
  },
});
export default customerSlice.reducer;

// let tempaarray = [];
// data.foreach((el) => {
//   tempaarray.push(el.serviceList);
// });