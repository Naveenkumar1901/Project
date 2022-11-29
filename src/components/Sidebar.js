import { useNavigate } from "react-router-dom";
import React from "react";
import {
  MdOutlineCarRepair,
  MdOutlineElectricCar,
  MdOutlineHome,
  MdOutlineLocalOffer,
} from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import logo from "../assets/Logo.png";
import "../styles/sidebar.css";

const Sidebar = (props) => {
  const navigate = useNavigate();
  return (
    <div className="sidebarContainer">
      <div className="menuSection">
        <img src={logo} alt="" className="logo" />
        <p className="displayName">Hello {props.displayName}</p>
      </div>
      <div className="homeSection" onClick={() => navigate("/")}>
        <MdOutlineHome className="homeIcon" />
        <p className="homeText">{props.home}</p>
      </div>
      {props.offers === "Offers" ? (
        <>
          <div className="offerSection">
            <MdOutlineLocalOffer className="offerIcon" />
            <p className="offersText">{props.offers}</p>
          </div>
          <div className="profileSection">
            <IoPersonOutline className="profileIcon" />
            <p className="profileText">{props.profile}</p>
          </div>
        </>
      ) : (
        ""
      )}

      <div className="upcomingSection" onClick={() => navigate("/upcoming")}>
        <MdOutlineCarRepair className="upcomingIcon" />
        <p className="upcomingText">{props.upcomingCars}</p>
      </div>
      <div className="outgoingSection" onClick={() => navigate("/delivered")}>
        <MdOutlineElectricCar className="outgoingIcon" />
        <p className="outgoingText">{props.outgoingCars}</p>
      </div>
      <div className="scheduleSection" onClick={() => navigate("/schedule")}>
        <AiOutlineSchedule className="scheduleIcon" />
        <p className="scheduleText">{props.scheduleAppointment}</p>
      </div>
    </div>
  );
};

export default Sidebar;
