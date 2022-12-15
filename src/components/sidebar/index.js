import React from "react";
import logo from "../../assets/Logo.png";
import "../../styles/sidebar.css";
import SideBarOption from "./SideBarOption";
import { useSelector } from "react-redux";

const SideBar = (props) => {
  const sidebarToggle = useSelector((state) => state.toggle.showSidebar);
  const userInfo = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div
      className={`sidebarContainer ${props.theme} ${
        !sidebarToggle ? "hideSidebar" : ""
      } `}
    >
      <div className="sidebarHeader">
        <img src={logo} alt="" />
        <p className="displayUsername">Hello {userInfo.UserName}</p>
      </div>
      <SideBarOption isOpen={!sidebarToggle} theme={props.theme} />
    </div>
  );
};

export default SideBar;
