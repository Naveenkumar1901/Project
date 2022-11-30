import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import HomeBase from "../reusableComponent/HomeBase";
import "../styles/home.css";
const Home = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="homeContainer">
      <loading />
      <div className="homeSidebar">
        <Sidebar
          displayName="Abcd"
          home="Home"
          offers="Offers"
          profile="Profile"
          upcomingCars="Upcoming cars"
          outgoingCars="Outgoing cars"
          scheduleAppointment="Schedule appointment"
        />
      </div>

      <div className="homePage">
        <HomeBase />
      </div>
    </div>
  );
};

export default Home;
