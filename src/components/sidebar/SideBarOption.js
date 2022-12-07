import React from "react";
import { NavLink } from "react-router-dom";
import sideBarData from "../../data/sideBarData";
import "../../styles/sidebar.css";
import { Tooltip, Zoom } from "@mui/material";

const SideBarOption = ({ isOpen }) => {
  const activeStyle = {
    backgroundColor: "gold",
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
                  className="eachOption"
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
                className="eachOption"
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
