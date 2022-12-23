import "../styles/reusableForm.css";
import React from "react";
import { useState } from "react";
import FormFields from "../reusableComponent/FormFields";
import Button from "../reusableComponent/Button";
import { FaRegUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  createCustomer,
  getCustomerDetails,
} from "../redux/slices/customerSlice";
import { useNavigate } from "react-router-dom";

const CreateCustomer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({});

  const handleChange = (value, fieldName) => {
    setFormValue((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const createCustomerOperation = async () => {
    let data = formValue;
    dispatch(createCustomer(data))
      .unwrap()
      .then(() => {
        dispatch(getCustomerDetails());
        navigate("/home");
      });
    // .catch(() => {
    //   error(true);
    // });
  };
  // const error = useSelector((state) => state.customer.createCustomerErr);

  return (
    <div className="formContainer">
      <div className="formHeader">
        <FaRegUser />
        <p className="formTitle">Create customer</p>
      </div>
      <form
        className="createCustomerFormInnerContainer"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formValue);
        }}
      >
        <FormFields
          cularsField
          fieldName="Customer name"
          onChange={(value) => {
            handleChange(value, "CustomerName");
          }}
        />
        <FormFields
          fieldName="Mobile number"
          maxLength="10"
          minLength="10"
          onChange={(value) => {
            handleChange(value, "MobileNumber");
          }}
        />
        <FormFields
          fieldName="Address"
          onChange={(value) => {
            handleChange(value, "Address");
          }}
        />
        <FormFields
          fieldName="City"
          onChange={(value) => {
            handleChange(value, "City");
          }}
        />
        <FormFields
          fieldName="Car brand"
          onChange={(value) => {
            handleChange(value, "CarBrand");
          }}
        />
        <FormFields
          fieldName="Car model"
          onChange={(value) => {
            handleChange(value, "CarModel");
          }}
        />
        <FormFields
          fieldName="Register number"
          onChange={(value) => {
            handleChange(value, "RegNumber");
          }}
        />
        <FormFields
          fieldName="Description"
          onChange={(value) => {
            handleChange(value, "Dscription");
          }}
        />
        <div className="formBtn">
          <Button variant={"primary"} onClick={createCustomerOperation}>
            Create
          </Button>
        </div>
        {/* {error && <span className="errorMessage">{error}</span>} */}
      </form>
    </div>
  );
};

export default CreateCustomer;
