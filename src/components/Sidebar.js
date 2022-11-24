import { useNavigate } from "react-router-dom";
import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import {
  MdOutlineCarRepair,
  MdOutlineElectricCar,
  MdOutlineHome,
  MdOutlineLocalOffer,
} from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import "../styles/sidebar.css";

const Sidebar = (props) => {
  const navigate = useNavigate();
  return (
    <div className="sidebarContainer">
      <div className="menuSection">
        <BiMenuAltLeft className="menuIcon" />
        <p className="displayName">Hello {props.displayName}</p>
      </div>
      <div className="homeSection" onClick={() => navigate("/")}>
        <MdOutlineHome className="homeIcon" />
        <p className="homeText">Home</p>
      </div>
      <div className="offerSection" onClick={() => navigate("/offers")}>
        <MdOutlineLocalOffer className="offerIcon" />
        <p className="offersText">Offers</p>
      </div>
      <div className="profileSection" onClick={() => navigate("/profile")}>
        <IoPersonOutline className="profileIcon" />
        <p className="profileText">Profile</p>
      </div>
      <div className="upcomingSection" onClick={() => navigate("/upcoming")}>
        <MdOutlineCarRepair className="upcomingIcon" />
        <p className="upcomingText">Upcoming cars</p>
      </div>
      <div className="outgoingSection" onClick={() => navigate("/delivered")}>
        <MdOutlineElectricCar className="outgoingIcon" />
        <p className="outgoingText">Outgoing cars</p>
      </div>
      <div className="scheduleSection" onClick={() => navigate("/schedule")}>
        <AiOutlineSchedule className="scheduleIcon" />
        <p className="scheduleText">Schedule appointment</p>
      </div>
    </div>
  );
};

export default Sidebar;
