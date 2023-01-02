import "../styles/serviceCostDetails.css";
import React from "react";
const ServiceCostDetails = (props, { variant }) => {
  return (
    <div>
      {" "}
      <div className={`eachCostSection ${variant || ""}`}>
        <p className="costParticular">{props.costParticular}</p>
        <p
          className={`costValue ${
            props.costValue === "Not Payed!"
              ? "redColor"
              : props.costValue === "Payed!"
              ? "greenColor"
              : "#232323"
          } `}
        >
          {props.costValue}
        </p>
      </div>
    </div>
  );
};

export default ServiceCostDetails;
