import React from "react";

import "../styles/serviceCategory.css";
const SeviceCategory = (props) => {
  return (
    <div className="serviceOptions">
      <div className="serviceIcon">{props.icon}</div>
      <p className="serviceName">{props.name}</p>
    </div>
  );
};

export default SeviceCategory;
