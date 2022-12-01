import React from "react";
import SideBar from "../components/SideBar";
import ServicesBase from "../reusableComponent/ServicesBase";
import "../styles/upcoming.css";
const Upcoming = () => {
  return (
    <div className="upcomingContainer">
      <div className="upcomingSidebar">
        <SideBar
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
