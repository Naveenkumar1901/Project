import React, { useState } from "react";
import SideBar from "../reusableComponent/SideBar";
import HomeBase from "../reusableComponent/HomeBase";
import "../styles/home.css";
const Home = ({ children }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="homeContainer">
      {/* <loading /> */}
      <div className="homeSidebar">
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

      <div className="homePage">{children} </div>
    </div>
  );
};

export default Home;
