import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import "../styles/basePage.css";
import logo from "../assets/Logo.png";
import banner from "../assets/homeBanner.png";
import service from "../assets/Repair.png";
import { useNavigate } from "react-router-dom";
import services from "../serviceSection";
const BasePage = () => {
  const navigate = useNavigate();
  return (
    <div className="basePageContainer">
      <div className="basePageInnerContainer">
        <div className="navbar">
          <img src={logo} alt="" className="logo" />
          <div className="searchSection">
            <BiSearchAlt2 className="searchIcon" />
            <input type="text" placeholder="Search" className="search" />
            <IoClose className="closeIcon" />
          </div>
          <button
            className="btn"
            onClick={() => {
              navigate("/login");
            }}
          >
            Log out
          </button>
        </div>
        <img src={banner} alt="" className="banner" />
        <span className="selectServiceText">Select Service</span>
        <div className="serviceSection">
          <div className="eachService">
            {/* {service.map((data) => data.imgFile)} */}
            <img src={service} alt="" className="serviceIcon" />
            <p className="serviceName">Repair</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasePage;
