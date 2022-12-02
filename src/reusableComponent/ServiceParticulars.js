import React from "react";
import "../styles/serviceParticulars.css";
import ServiceParticularsField from "./ServiceParticularsField";
const ServiceParticulars = (props) => {
  return (
    <div className="serviceParticularsContainer">
      <form className="serviceParticularsInnerContainer">
        <div className="serviceParticularsHeader">
          {props.serviceIcon}
          <p className="serviceParticularsTitle">{props.serviceName}</p>
        </div>
        <ServiceParticularsField fieldName="Customer name" />
        <ServiceParticularsField fieldName="Car name" />
        <ServiceParticularsField fieldName="Car number" />
        <ServiceParticularsField fieldName="Entry date" type="date" />
        <ServiceParticularsField fieldName="Delivery date" type="date" />
        <ServiceParticularsField fieldName="Description" />
        <ServiceParticularsField fieldName="Service type" />
        <ServiceParticularsField fieldName="Premium polish" type="checkbox" />
        <ServiceParticularsField fieldName="Ceramic coating" type="checkbox" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default ServiceParticulars;
