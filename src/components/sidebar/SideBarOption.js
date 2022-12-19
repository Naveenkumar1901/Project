import "../../styles/sidebar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import sideBarData from "../../data/sideBarData";
import { Tooltip, Zoom } from "@mui/material";
import { useSelector } from "react-redux";

const SideBarOption = ({ isOpen }) => {
  const theme = useSelector((state) => state.color.theme);
  const activeStyle = {
    backgroundColor: theme === "dark" ? "orange" : "gold",
    color: theme === "dark" ? "white" : "black",
  };

  return (
    <div
      className={`sidebarOptions ${
        theme === "dark" ? "dark-theme" : "light-theme"
      }`}
    >
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
                    theme === "dark" ? "dark-theme" : "light-theme"
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
