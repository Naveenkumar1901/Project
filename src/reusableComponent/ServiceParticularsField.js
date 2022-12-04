import React from "react";
import Input from "./Input";
import "../styles/serviceParticulars.css";
const ServiceParticularsField = (props) => {
  return (
    <div className="serviceParticularsField">
      <p className="fieldName">{props.fieldName}</p>
      <div className="inputField">
        {props.fieldName === "Description" ||
        props.fieldName === "Service type" ? (
          <textarea
            className="multilineInput"
            onChange={(e) => props.onChange(e.target.value)}
          ></textarea>
        ) : (
          <Input type={props.type} onChange={(e) => props.onChange(e)} />
        )}
      </div>
    </div>
  );
};

export default ServiceParticularsField;
