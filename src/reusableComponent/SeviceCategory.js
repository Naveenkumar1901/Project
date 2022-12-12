import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../styles/serviceCategory.css";
const SeviceCategory = (props) => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.color.theme);

  return (
    <div
      className={`serviceOptions ${
        theme === "dark" ? "dark-theme" : "light-theme"
      }`}
      onClick={() => navigate(props.serviceParticularsPage)}
    >
      <div className="serviceIcon">{props.icon}</div>
      <p className="serviceName">{props.name}</p>
    </div>
  );
};

export default SeviceCategory;
