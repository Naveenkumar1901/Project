import React from "react";
import logo from "../../assets/Logo.png";
import "../../styles/sidebar.css";
import SideBarOption from "./SideBarOption";
import { useDispatch, useSelector } from "react-redux";
import IOSSwitch from "../Switch";
import { changeTheme } from "../../redux/slices/themeSlice";

const SideBar = (props) => {
  const sidebarToggle = useSelector((state) => state.toggle.showSidebar);
  const theme = useSelector((state) => state.color.theme);
  const dispatch = useDispatch();

  return (
    <div
      className={`sidebarContainer ${props.theme} ${
        !sidebarToggle ? "hideSidebar" : ""
      } `}
    >
      <div className="sidebarHeader">
        <img src={logo} alt="" />
        <p className="displayUsername">Hello {props.displayName}</p>
      </div>
      <SideBarOption isOpen={!sidebarToggle}  theme = {props.theme}/>
      <IOSSwitch
        onClick={() => {
          dispatch(changeTheme());
        }}
        checked={theme === "light" ? false : true}
      />
    </div>
  );
};

export default SideBar;
