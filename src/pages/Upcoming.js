import React from "react";
import Sidebar from "../components/Sidebar";
import ServicesBase from "../reusableComponent/ServicesBase";
import "../styles/upcoming.css";
const Upcoming = () => {
  return (
    <div className="upcomingContainer">
      <Sidebar
        displayName="Abcd"
        home="Home"
        upcomingCars="Upcoming cars"
        outgoingCars="Outgoing cars"
        scheduleAppointment="Schedule appointment"
      />
      <ServicesBase
        navigation1="Upcoming cars"
        navigation2="Details"
        navRoute1="/upcoming"
        navRoute2="/upcoming/details"
      />
    </div>
  );
};

export default Upcoming;
