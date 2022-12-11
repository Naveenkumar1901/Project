import React from "react";
import { NavLink } from "react-router-dom";
import sideBarData from "../../data/sideBarData";
import "../../styles/sidebar.css";
import { Tooltip, Zoom } from "@mui/material";

const SideBarOption = ({ isOpen, theme }) => {
  const activeStyle = {
    backgroundColor: "gold",
    color:theme !== "dark-theme" ? "black": "white"
  };
  return (
    <div className="sidebarOptions">
      {sideBarData.map((eachData) => {
        return (
          <>
            {isOpen ? (
              <Tooltip
                placement="left"
                title={eachData.name}
                arrow
                TransitionComponent={Zoom}
              >
                <NavLink
                  className={`eachOption ${
                    theme === "dark-theme" ? "eachOptionDark" : "eachOptionWhite"
                  }`}
                  to={eachData.route}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  {eachData.icon}

                  <p
                    className={`sidebarOptionText ${
                      isOpen ? "animate-text" : ""
                    }`}
                  >
                    {eachData.name}
                  </p>
                </NavLink>
              </Tooltip>
            ) : (
              <NavLink
                className={`eachOption ${
                  theme === "dark-theme" ? "eachOptionDark" : "eachOptionWhite"
                }`}
                to={eachData.route}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {eachData.icon}

                <p
                  className={`sidebarOptionText ${
                    isOpen ? "animate-text" : ""
                  }`}
                >
                  {eachData.name}
                </p>
              </NavLink>
            )}
          </>
        );
      })}
    </div>
  );
};

export default SideBarOption;
