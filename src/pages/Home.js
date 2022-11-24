import React from "react";
import Sidebar from "../components/Sidebar";
import BasePage from "../reusableComponent/BasePage";
import "../styles/home.css";
const Home = () => {
  return (
    <div className="homeContainer">
      <Sidebar displayName="Abcd" />
      <BasePage />
    </div>
  );
};

export default Home;
