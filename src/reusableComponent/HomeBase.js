import React from "react";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import "../styles/basePage.css";
import banner from "../assets/bannerDesign.jpg";
import services from "../serviceSection";

const BasePage = () => {
  const navigate = useNavigate();
  return (
    <div className="basePageContainer">
      <div className="basePageInnerContainer">
        <div className="navbar">
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
          {services.map((data, index) => {
                return (
                  <div className="eachService">
                  <div key={index} className="serviceIcon">
                    {data.icon}
                  </div>
                  <p key={index} className="serviceName">
                  {data.name}
                </p>
                </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default BasePage;
