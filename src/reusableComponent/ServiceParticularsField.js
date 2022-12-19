import "../styles/eachServiceAndPaymentForm.css";
import ".././styles/dropdown.css";
import React, { useState } from "react";
import Input from "./Input";

const ServiceParticularsField = (props, { variant }) => {
  const paymentMode = [
    {
      value: "",
      text: "- Choose an option -",
    },
    {
      value: "debitCard",
      text: "Debit card",
    },
    {
      value: "creditCard",
      text: "Credit card",
    },
    {
      value: "netBanking",
      text: "Net banking",
    },
    {
      value: "upi",
      text: "UPI",
    },
  ];

  const paymentStatus = [
    {
      value: "payed",
      text: "Payed!",
    },
    {
      value: "notPayed",
      text: "Not Payed!",
    },
  ];

  const deliveryStatus = [
    {
      value: "delivered",
      text: "Delivered",
    },
    {
      value: "notDelivered",
      text: "Not delivered",
    },
  ];

  const [select, setSelect] = useState(paymentMode[0].text);

  return (
    <div className="serviceParticularsField">
      <p className="fieldName">{props.fieldName}</p>
      <div className="inputField">
        {props.fieldName === "Description" || props.fieldName === "Address" ? (
          <textarea
            className="multilineInput"
            onChange={(e) => props.onChange(e.target.value)}
          ></textarea>
        ) : props.fieldName === "Payment mode" ||
          props.fieldName === "Payment status" ||
          props.fieldName === "Delivery status" ? (
          <div className="dropdownWrapper">
            <select
              className={`commonDropdownStyle ${variant || ""}`}
              value={select}
              onChange={(e) => {
                setSelect(e.target.value);
                props.onChange(e.target.value);
              }}
            >
              {props.fieldName === "Payment mode"
                ? paymentMode.map((eachOption) => (
                    <option value={eachOption.value}>{eachOption.text}</option>
                  ))
                : props.fieldName === "Payment status"
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
              name={props.name}
              value={props.value}
              minLength={props.minLength}
              maxLength={props.maxLength}
              min={props.min}
              max={props.max}
              onChange={(e) => props.onChange(e)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceParticularsField;
