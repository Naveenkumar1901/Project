import React from "react";
import Sidebar from "../components/Sidebar";
import ServicesBase from "../reusableComponent/ServicesBase";
import "../styles/upcoming.css";
const Upcoming = () => {
  return (
    <div className="upcomingContainer">
      <div className="upcomingSidebar">
        <Sidebar
          displayName="Abcd"
          home="Home"
          upcomingCars="Upcoming cars"
          outgoingCars="Outgoing cars"
          scheduleAppointment="Schedule appointment"
        />
      </div>

      <div className="upcomingPage">
        <ServicesBase navigation1="Upcoming cars" navRoute1="/upcoming" />
      </div>
    </div>
  );
};

export default Upcoming;
