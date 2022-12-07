import React from "react";
import "../styles/upcomingAndSchedule.css";
import ServiceInfo from "./ServiceInfo";
import SearchBar from "../components/SearchBar";
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
      <div className="detailsSection">
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
          : upcomingInfo.map((data) => {
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
            })}
      </div>
    </div>
  );
};

export default ServicesBase;
