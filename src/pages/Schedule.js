import React from "react";
import Sidebar from "../components/Sidebar";
import ServicesBase from "../reusableComponent/ServicesBase";
import "../styles/schedule.css";
const Schedule = () => {
  return (
    <div className="scheduleContainer">
      <div className="scheduleSidebar">
        <Sidebar
          displayName="Abcd"
          home="Home"
          upcomingCars="Upcoming cars"
          outgoingCars="Outgoing cars"
          scheduleAppointment="Schedule appointment"
        />
      </div>

      <div className="schedulePage">
        <ServicesBase
          navigation1="Schedule appointment"
          btn="btn"
          navRoute1="/schedule"
        />
      </div>
    </div>
  );
};

export default Schedule;
