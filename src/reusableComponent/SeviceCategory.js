import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/serviceCategory.css";
const SeviceCategory = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="serviceOptions"
      onClick={() => navigate(props.serviceParticularsPage)}
    >
      <div className="serviceIcon">{props.icon}</div>
      <p className="serviceName">{props.name}</p>
    </div>
  );
};

export default SeviceCategory;
