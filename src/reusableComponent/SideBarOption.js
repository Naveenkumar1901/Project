import React from "react";
import { NavLink } from "react-router-dom";
import sideBarData from "../data/sideBarData";
import "../styles/sidebar.css";
import { Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";

const SideBarOption = ({ isOpen }) => {
  const activeStyle = {
    backgroundColor: "gold",
    borderLeft: "5px solid #ffffff",
  };
  return (
    <div className="sidebarOptions">
      {sideBarData.map((eachData) => {
        return (
          <>
            <Tooltip
              placement="right-start"
              TransitionComponent={Zoom}
              TransitionProps={{ timeout: 300 }}
              title={eachData.name}
              arrow
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
          </>
        );
      })}
    </div>
  );
};

export default SideBarOption;
