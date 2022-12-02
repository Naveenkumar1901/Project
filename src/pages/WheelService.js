import React from "react";
import ServiceParticulars from "../reusableComponent/ServiceParticulars";
import { GiCartwheel } from "react-icons/gi";
import SideBar from "../reusableComponent/SideBar";
import "../styles/serviceParticularsPage.css";
const WheelService = () => {
  return (
    <div className="wheelServiceContainer">
      <div className="wheelServiceSideBar">
        <SideBar
          displayName="Abcd"
          home="Home"
          offers="Offers"
          profile="Profile"
          upcomingCars="Upcoming cars"
          outgoingCars="Outgoing cars"
          scheduleAppointment="Schedule appointment"
        />
      </div>
      <div className="wheelServicePage">
        <ServiceParticulars
          serviceParticularsPage="/wheelService"
          serviceIcon=<GiCartwheel className="serviceIcon" />
          serviceName="Wheel Service"
        />
        <input type />
      </div>
    </div>
  );
};

export default WheelService;
