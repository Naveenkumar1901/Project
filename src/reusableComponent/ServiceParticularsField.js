import React from "react";
import Input from "./Input";
import "../styles/serviceParticulars.css";
const ServiceParticularsField = (props) => {
  return (
    <div className="serviceParticularsField">
      <p className="fieldName">{props.fieldName}</p>
      <div className="inputField">
        {props.type === "checkbox" ? (
          <div className="checkboxSection">
            <input className="checkboxInput" type={props.type} />
          </div>
        ) : (
          <>
            {props.fieldName === "Description" ||
            props.fieldName === "Service type" ? (
              <textarea className="multilineInput"></textarea>
            ) : (
              <Input type={props.type} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceParticularsField;
