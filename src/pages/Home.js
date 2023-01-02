import "../styles/home.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BiMenuAltLeft } from "react-icons/bi";
import { Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import banner from "../assets/bannerDesign.jpg";
import ServiceCategory from "../reusableComponent/SeviceCategory";
import services from "../data/serviceSection";
import Button from "../reusableComponent/Button";
import { toggleSideBar } from "../redux/slices/toggleSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const customerDetails = useSelector(
    (state) => state.customer.customerDetails
  );
  const customer = customerDetails[customerDetails.length - 1];
  const sidebarToggle = useSelector((state) => state.toggle.showSidebar);

  return (
    <div className="basePageContainer">
      <div className="navbar">
        <div className="navbarLeftSection">
          <Tooltip
            placement="bottom"
            title={sidebarToggle ? "Hide Sidebar " : "Show Sidebar"}
            arrow
            TransitionComponent={Zoom}
          >
            <div className="menuIcon">
              {" "}
              <BiMenuAltLeft
                onClick={() => {
                  dispatch(toggleSideBar());
                }}
              />
            </div>
          </Tooltip>
          <Button
            variant={"primary"}
            onClick={() => {
              navigate("/home/createCustomer");
            }}
          >
            Create customer
          </Button>
        </div>
        <p className="currentCustomerName">
          Current customer: {customer?.CustomerName}
        </p>
        <Button
          variant={"primary"}
          onClick={() => {
            localStorage.removeItem("currentUser");
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
