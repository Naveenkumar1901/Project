import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  MdOutlineCarRepair,
  MdOutlineElectricCar,
  MdOutlineHome,
  MdOutlineLocalOffer,
} from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import logo from "../assets/Logo.png";
import "../styles/sideBar.css";
import { AnimatePresence, motion } from "framer-motion";

const SideBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  const navigate = useNavigate();
  return (
    <div className="sidebarContainer">
      {/* <motion.div
        animate={{
          width: isOpen ? "200px" : "45px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className={`sidebar `}
      > */}
      <div className="menuSection">
        <img src={logo} alt="" className="logo" />
        <p className="displayName">Hello {props.displayName}</p>
        <BiMenuAltLeft className="menuIcon" onClick={toggle} />
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
      {/* </motion.div> */}
    </div>
  );
};

export default SideBar;
