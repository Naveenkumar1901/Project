import React from "react";
import Input from "./Input";
import Dropdown from "./Dropdown";
import "../styles/eachServiceAndPaymentForm.css";

const ServiceParticularsField = (props) => {
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
          props.fieldName === "Payment status" ? (
          <div className="dropdownWrapper">
            <Dropdown onChange={(e) => props.onChange(e)} />
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
