import React from "react";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import "../styles/homeBase.css";
import banner from "../assets/bannerDesign.jpg";
import ServiceCategory from "../reusableComponent/SeviceCategory";
import services from "../data/serviceSection";
import SearchBar from "./SearchBar";
const BasePage = (props) => {
  const navigate = useNavigate();
  return (
    <div className="basePageContainer">
      <div className="basePageInnerContainer">
        <div className="navbar">
          <div className="homeSearch">
            <SearchBar />
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
            {services.map((data) => {
              return (
                <ServiceCategory
                  icon={data.icon}
                  name={data.name}
                  serviceParticularsPage="/carService"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasePage;
