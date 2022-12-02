import React from "react";
import { GiAutoRepair } from "react-icons/gi";
import ServiceParticulars from "../reusableComponent/ServiceParticulars";
import ServiceParticularsField from "../reusableComponent/ServiceParticularsField";
import SideBar from "../reusableComponent/SideBar";
import "../styles/serviceParticularsPage.css";

const CarService = (props) => {
  return (
    <div className="carServiceContainer">
      <div className="carServiceSideBar">
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
      <div className="carServicePage">
        <ServiceParticulars
          serviceIcon=<GiAutoRepair className="serviceIcon" />
          serviceName="Car Service"
        />
        <ServiceParticularsField fieldName="Premium polish" type="checkbox" />
        <ServiceParticularsField fieldName="Ceramic coating" type="checkbox" />
      </div>
    </div>
  );
};

export default CarService;
