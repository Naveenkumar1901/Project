import React from "react";
import { BiCalendar } from "react-icons/bi";
import { MdAccessTimeFilled } from "react-icons/md";
import "../styles/serviceInfoCard.css";
import Button from "./Button";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ServiceInfoCard = (props) => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.color.theme);

  return (
    <>
      <div
        className={`serviceInfoContainer ${
          theme === "dark" ? "dark-theme" : "light-theme"
        }`}
      >
        <div className="ownerNameSection">
          <p className="ownerNameText">Customer name</p>
          <p className="ownerNameValue">
            {props.customerName}({props.city})
          </p>
        </div>
        <div className="carNoSection">
          <p className="carNoText">Car number</p>
          <p className="carNoValue">{props.carNo}</p>
        </div>
        <div className="serviceNameSection">
          <p className="serviceNameText">Total amount</p>
          <p className="serviceNameValue">₹ {props.totalAmount}</p>
        </div>
        <hr className="separationLine" />
        <div className="scheduleStatus">
          <div className="calendar">
            <BiCalendar color="gray" />
            <p className="dateValue">{props.deliveryDate}</p>
          </div>
          <div className="time">
            <MdAccessTimeFilled color="gray" />
            <p className="timeValue">{props.deliveryTime}</p>
          </div>
          <div className="status">
            <span
              className={`dotIcon ${
                props.status === "O"
                  ? "greenColor"
                  : "redColor" && props.status === "upcoming"
                  ? "yellowColor"
                  : "redColor"
              }`}
            >
              &#x2022;
            </span>
            <p className="statusInfo">{props.status}</p>
          </div>
        </div>
        {props.scheduleStatus === "Not confirmed" ? null : (
          <div className="actionBtn">
            <Button variant={"secondary"} onClick={props.onClick}>
              Cancel
            </Button>
            <Button
              variant={"compact"}
              onClick={() => navigate("/home/services/carService")}
            >
              Reschedule
            </Button>
            <Button
              variant={"compact"}
              onClick={() => navigate("/schedule/payment")}
            >
              Service details
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default ServiceInfoCard;
