import React, { useState } from "react";
import "../styles/schedule.css";
import SearchBar from "../reusableComponent/SearchBar";
import appointmentInfo from "../data/appointmentData";
import ServiceInfo from "../reusableComponent/ServiceInfo";
import upcomingInfo from "../data/upcomingData";

const Schedule = (props) => {
  const [value, setSearchValue] = useState("");
  return (
    <div className="servicePageContainer">
      <div className="searchWrapper">
        <SearchBar value={value} setSearchValue={setSearchValue} />
      </div>
      <div className="detailsSection">
        {props.type === "schedule"
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

export default Schedule;
