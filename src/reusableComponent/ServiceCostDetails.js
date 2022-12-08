import React from "react";
import "../styles/serviceCostDetails.css";
const ServiceCostDetails = (props, { children, variant }) => {
  return (
    <div>
      {" "}
      <div className={`eachCostSection ${variant || ""}`}>
        <p className="costParticular">{props.costParticular}</p>
        {props.costParticular === "Total amount" ? (
          <p className="totalCostValue">Rs</p>
        ) : (
          <p className="costValue">{props.costValue}</p>
        )}
      </div>
    </div>
  );
};

export default ServiceCostDetails;
