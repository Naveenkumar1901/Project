import "../../styles/sidebar.css";
import React from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/Logo.png";
import SideBarOption from "./SideBarOption";

const SideBar = (props) => {
  const sidebarToggle = useSelector((state) => state.toggle.showSidebar);
  const userInfo = useSelector((state) => state.user.userInfo);

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
