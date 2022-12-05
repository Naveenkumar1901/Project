import React, { useEffect, useState } from "react";
import "../styles/serviceParticulars.css";
import Button from "./Button";
import ServiceParticularsField from "./ServiceParticularsField";
const ServiceParticulars = (props) => {
  const [formValue, setFormValue] = useState({});
  const submitForm = (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  const setState = (value, fieldName) => {
    setFormValue((prevState) => ({ ...prevState, [fieldName]: value }));
  };

  useEffect(() => {
    console.log(props.checkboxArray);
    const checkObj = props.checkboxArray?.reduce(
      (obj, val) => ({ ...obj, [val.fieldName]: false }),
      {}
    );
    setFormValue(checkObj);
  }, []);

  return (
    <div className="serviceParticularsContainer">
      <form
        className="serviceParticularsInnerContainer"
        onSubmit={(e) => submitForm(e)}
      >
        <div className="serviceParticularsHeader">
          {props.serviceIcon}
          <p className="serviceParticularsTitle">{props.serviceName}</p>
        </div>
        <ServiceParticularsField
          fieldName="Customer name"
          onChange={(value) => {
            setState(value, "customerName");
          }}
        />
        <ServiceParticularsField
          fieldName="Car name"
          onChange={(value) => {
            setState(value, "carName");
          }}
        />
        <ServiceParticularsField
          fieldName="Car number"
          onChange={(value) => {
            setState(value, "carNumber");
          }}
        />
        <ServiceParticularsField
          fieldName="Entry date"
          type="date"
          onChange={(value) => {
            setState(value, "entryDate");
          }}
        />
        <ServiceParticularsField
          fieldName="Delivery date"
          type="date"
          onChange={(value) => {
            setState(value, "deliveryDate");
          }}
        />
        <ServiceParticularsField
          fieldName="Description"
          onChange={(value) => {
            setState(value, "description");
          }}
        />
        <ServiceParticularsField
          fieldName="Service type"
          onChange={(value) => {
            setState(value, "serviceType");
          }}
        />
        {props.checkboxArray?.map((val) => {
          return (
            <div className="checkboxSection">
              <ServiceParticularsField
                fieldName={val.fieldName}
                type="checkbox"
                onChange={(value) => {
                  setState(value, val.fieldName);
                }}
              />
            </div>
          );
        })}
        <Button variant={"primary"} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ServiceParticulars;
