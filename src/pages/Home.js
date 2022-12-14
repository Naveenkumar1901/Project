import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import banner from "../assets/bannerDesign.jpg";
import ServiceCategory from "../reusableComponent/SeviceCategory";
import services from "../data/serviceSection";
import SearchBar from "../reusableComponent/SearchBar";
import Button from "../reusableComponent/Button";
import { BiMenuAltLeft } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../redux/slices/toggleSlice";
import { Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";

const Home = () => {
  const navigate = useNavigate();
  const [value, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const sidebarToggle = useSelector((state) => state.toggle.showSidebar);

  return (
    <div className="basePageContainer">
      <div className="navbar">
        <div className="homeSearch">
          <Tooltip
            placement="bottom"
            title={sidebarToggle ? "Hide Sidebar " : "Show Sidebar"}
            arrow
            TransitionComponent={Zoom}
          >
            <div>
              {" "}
              <BiMenuAltLeft
                size={30}
                color={"gold"}
                className="menuIcon"
                onClick={() => {
                  dispatch(toggleSideBar());
                }}
              />
            </div>
          </Tooltip>
          <SearchBar value={value} setSearchValue={setSearchValue} />
        </div>
        <Button
          variant={"primary"}
          onClick={() => {
            localStorage.removeItem("userInfo");
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
                serviceParticularsPage={`/home/services/${data.routeName}`}
              />
            );
          })}
        </div>
      </>
    </div>
  );
};

export default Home;
