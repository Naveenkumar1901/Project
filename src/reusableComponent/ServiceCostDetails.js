import React from "react";
import "../styles/serviceCostDetails.css";
const ServiceCostDetails = (props, { variant }) => {
  return (
    <div>
      {" "}
      <div className={`eachCostSection ${variant || ""}`}>
        {props.costParticular === "Total amount" ? (
          <>
            <p className="totalCostParticular">{props.costParticular}</p>
            <p className="totalCostValue">₹</p>
          </>
        ) : (
          <>
            <p className="costParticular">{props.costParticular}</p>
            <p
              className={`costValue ${
                props.costValue === "Not Payed!"
                  ? "redColor"
                  : props.costValue === "Payed!"
                  ? "greenColor"
                  : "#232323"
              } 
              `}
            >
              {props.costValue}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceCostDetails;
