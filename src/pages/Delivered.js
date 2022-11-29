import React from "react";
import Sidebar from "../components/Sidebar";
import ServicesBase from "../reusableComponent/ServicesBase";
import "../styles/delivered.css";
const Delivered = () => {
  return (
    <div className="deliveredContainer">
      <Sidebar
        displayName="Abcd"
        home="Home"
        upcomingCars="Upcoming cars"
        outgoingCars="Outgoing cars"
        scheduleAppointment="Schedule appointment"
      />
      <ServicesBase
        navigation1="Delivered cars"
        navigation2="Details"
        navRoute1="/delivered"
        navRoute2="/delivered/details"
      />
    </div>
  );
};

export default Delivered;
