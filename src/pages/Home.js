import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import HomeBase from "../reusableComponent/HomeBase";
import "../styles/home.css";
const Home = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="homeContainer">
      <loading/>
      <Sidebar displayName="Abcd" />
      <HomeBase />
    </div>
  );
};

export default Home;
