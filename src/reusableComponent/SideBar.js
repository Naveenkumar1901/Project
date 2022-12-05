import React from "react";
import logo from "../assets/Logo.png";
import "../styles/sidebar.css";
import SideBarOption from "./SideBarOption";
import { useSelector } from "react-redux";

const SideBar = (props, isOpen) => {
  const sidebarToggle = useSelector((state) => state.toggle.showSidebar);
  return (
    <div className={`sidebarContainer ${!sidebarToggle ? "hideSidebar" : ""} `}>
      <div className="sidebarHeader">
        <img
          src={logo}
          alt=""
          className={`sidebarHeader ${isOpen ? "sidebarHeader" : "logoShrink"}`}
        />
        <p>Hello {props.displayName}</p>
      </div>
      <SideBarOption isOpen={!sidebarToggle} />
    </div>
  );
};

export default SideBar;
