import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import sideBarData from "../data/sideBarData";
import "../styles/sidebar.css";

const SideBarOption = ({ isOpen }) => {
  const activeStyle = {
    backgroundColor: "gold",
  };
  return (
    <div className="sidebarOptions">
      {sideBarData.map((eachData) => {
        return (
          <NavLink
            className="eachOption"
            to={eachData.route}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {eachData.icon}
            <p className={`sidebarOptionText ${isOpen ? "animate-text" : ""}`}>
              {eachData.name}
            </p>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SideBarOption;
