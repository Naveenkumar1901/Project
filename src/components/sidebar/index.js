import React from "react";
import logo from "../../assets/Logo.png";
import "../../styles/sidebar.css";
import SideBarOption from "./SideBarOption";
import { useSelector } from "react-redux";

const SideBar = (props) => {
  const sidebarToggle = useSelector((state) => state.toggle.showSidebar);
  return (
    <div className={`sidebarContainer ${!sidebarToggle ? "hideSidebar" : ""} `}>
      <div className="sidebarHeader">
        <img src={logo} alt="" />
        <p className="displayUsername">Hello {props.displayName}</p>
      </div>
      <SideBarOption isOpen={!sidebarToggle} />
    </div>
  );
};

export default SideBar;
