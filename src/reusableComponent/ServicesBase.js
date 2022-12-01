import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import "../styles/serviceBase.css";
import ServiceInfo from "./ServiceInfo";
import SearchBar from "./SearchBar";
import appointmentInfo from "../data/appointmentData";
import upcomingInfo from "../data/upcomingData";

const ServicesBase = (props) => {
  return (
    <div className="servicePageContainer">
      <div className="servicePageNavbar">
        {/* <div className="searchSection">
          <BiSearchAlt2 className="searchIcon" />
          <input type="text" placeholder="Search" className="search" />
          <IoClose className="closeIcon" />
        </div> */}
        <div className="baseSearch">
          <SearchBar />
        </div>
      </div>
      <div className="breadcrumbSection">
        <RiArrowRightSLine className="scheduleIcon" />
        <Link className="breadcrumbOption">{props.navigation1}</Link>
        {props.navigation2 ? (
          <RiArrowRightSLine className="scheduleIcon" />
        ) : null}

        <Link className="breadcrumbOption">{props.navigation2}</Link>
      </div>
      {props.navigation1 === "Delivered cars" ? null : (
        <div className="detailsSection">
          <div className="eachDetail">
            {props.navigation1 === "Schedule appointment"
              ? appointmentInfo.map((data) => {
                  return (
                    <ServiceInfo
                      ownerName={data.ownerName}
                      carName={data.carName}
                      carNo={data.carNo}
                      date={data.date}
                      time={data.time}
                      status={data.status}
                    />
                  );
                })
              : null}
            {props.navigation1 === "Upcoming cars"
              ? upcomingInfo.map((data) => {
                  return (
                    <ServiceInfo
                      ownerName={data.ownerName}
                      carName={data.carName}
                      carNo={data.carNo}
                      date={data.date}
                      time={data.time}
                      status={data.status}
                    />
                  );
                })
              : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesBase;
