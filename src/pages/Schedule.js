import "../styles/upcomingAndSchedule.css";
import React, { useState } from "react";
import SearchBar from "../reusableComponent/SearchBar";
import ServiceInfo from "../reusableComponent/ServiceInfoCard";
import customerData from "../data/CustomerData";

const Schedule = () => {
  const [value, setSearchValue] = useState("");

  return (
    <div className="servicePageContainer">
      <div className="searchWrapper">
        <SearchBar value={value} setSearchValue={setSearchValue} />
      </div>
      <div className="detailsSection">
        {customerData.map((data) => {
          return (
            <ServiceInfo
              customerName={data.customerName}
              carNo={data.carNo}
              serviceType={data.serviceType}
              deliveryDate={data.deliveryDate}
              deliveryTime={data.deliveryTime}
              scheduleStatus={data.scheduleStatus}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;
