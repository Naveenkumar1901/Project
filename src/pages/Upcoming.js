import "../styles/upcomingAndSchedule.css";
import React, { useState } from "react";
import SearchBar from "../reusableComponent/SearchBar";
import ServiceInfo from "../reusableComponent/ServiceInfoCard";
import { useSelector } from "react-redux";

const Upcoming = () => {
  const customerDetails = useSelector(
    (state) => state.customer.customerDetails
  );
  const [value, setSearchValue] = useState("");
  return (
    <div className="servicePageContainer">
      <div className="searchWrapper">
        <SearchBar value={value} setSearchValue={setSearchValue} />
      </div>
      <div className="detailsSection">
        {customerDetails?.map((data) => {
          return data.ServiceList.length >= 1 ? (
            <ServiceInfo
              customerName={data.CustomerName}
              city={data.City}
              carNo={data.RegNumber}
              totalAmount={data.TotalAmount}
              deliveryDate={data.DeliveryDate}
              deliveryTime={data.DeliveryTime}
              status={data.Status}
              customerData={data}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Upcoming;
