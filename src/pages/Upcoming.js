import React, { useState } from "react";
import "../styles/upcomingAndSchedule.css";
import SearchBar from "../reusableComponent/SearchBar";
import ServiceInfoCard from "../reusableComponent/ServiceInfoCard";
import upcomingInfo from "../data/upcomingData";

const Upcoming = () => {
  const [value, setSearchValue] = useState("");
  return (
    <div className="servicePageContainer">
      <div className="searchWrapper">
        <SearchBar value={value} setSearchValue={setSearchValue} />
      </div>
      <div className="detailsSection">
        {upcomingInfo.map((data) => {
          return (
            <ServiceInfoCard
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

export default Upcoming;
