import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/homeBase.css";
import banner from "../assets/bannerDesign.jpg";
import ServiceCategory from "../reusableComponent/SeviceCategory";
import services from "../data/serviceSection";
import SearchBar from "./SearchBar";
import Button from "./Button";
import { BiMenuAltLeft } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../store/toggleSlice";

const BasePage = (props) => {
  const navigate = useNavigate();
  const [value, setSearchValue] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="basePageContainer">
      <div className="navbar">
        <div className="homeSearch">
          <BiMenuAltLeft
            size={25}
            className="menuIcon"
            onClick={() => {
              dispatch(toggleSideBar());
            }}
          />
          <SearchBar value={value} setSearchValue={setSearchValue} />
        </div>
        <Button
          variant={"primary"}
          onClick={() => {
            navigate("/login");
          }}
        >
          Log out
        </Button>
      </div>

      <img src={banner} alt="" className="banner" />

      <>
        <div className="eachService">
          {services.map((data) => {
            return (
              <ServiceCategory
                icon={data.icon}
                name={data.name}
                serviceParticularsPage={`/services/${data.routeName}`}
              />
            );
          })}
        </div>
      </>
    </div>
  );
};

export default BasePage;
