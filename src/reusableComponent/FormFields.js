import "../styles/reusableForm.css";
import ".././styles/dropdown.css";
import React from "react";
import Input from "./Input";

const FormFields = (props, { variant }) => {


  const paymentStatus = [
    {
      text: "Payed!",
    },
    {
      text: "Not payed!",
    },
  ];

  const deliveryStatus = [
    {
      text: "Delivered",
    },
    {
      text: "Not delivered",
    },
  ];

  return (
    <div className="formFields">
      <p className="fieldName">{props.fieldName}</p>
      <div className="inputField">
        {props.fieldName === "Description" || props.fieldName === "Address" ? (
          <textarea
            className="multilineInput"
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
          ></textarea>
        ) : props.fieldName === "Payment status" ||
          props.fieldName === "Delivery status" ? (
          <div className="dropdownWrapper">
            <select
              className={`commonDropdownStyle ${variant || ""}`}
              value={props.value}
              onChange={(e) => {
                props.onChange(e.target.value);
              }}
            >
              {props.fieldName === "Payment status"
                ? paymentStatus.map((eachOption) => (
                    <option>{eachOption.text}</option>
                  ))
                : deliveryStatus.map((eachOption) => (
                    <option>{eachOption.text}</option>
                  ))}
            </select>
          </div>
        ) : (
          <div className={`inputWrapper`}>
            <Input
              type={props.type}
              value={props.value}
              minLength={props.minLength}
              maxLength={props.maxLength}
              onChange={(e) => props.onChange(e)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FormFields;
