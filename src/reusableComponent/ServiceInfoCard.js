import React from "react";
import { BiCalendar } from "react-icons/bi";
import { MdAccessTimeFilled } from "react-icons/md";
import "../styles/serviceInfoCard.css";
import Button from "./Button";

const ServiceInfoCard = (props) => {
  return (
    <div className="serviceInfoContainer">
      <div className="ownerNameSection">
        <p className="ownerNameText">Owner name</p>
        <p className="ownerNameProps">{props.ownerName}</p>
      </div>
      <div className="carNameSection">
        <p className="carNameText">Car name </p>
        <p className="carNameProps">{props.carName}</p>
      </div>
      <div className="carNoSection">
        <p className="carNoText">Car no</p>
        <p className="carNoProps">{props.carNo}</p>
      </div>
      <hr className="separationLine" />
      <div className="scheduleStatus">
        <div className="calendar">
          <BiCalendar color="gray" />
          <p className="propsDate">{props.date}</p>
        </div>
        <div className="time">
          <MdAccessTimeFilled color="gray" />
          <p className="propsTime">{props.time}</p>
        </div>
        <div className="status">
          <span
            className={`dotIcon ${
              props.status === "confirmed" ? "greenColor" : "redColor"
            }`}
          >
            &#x2022;
          </span>
          <p className="propsStatus">{props.status}</p>
        </div>
      </div>
      {props.status === "upcoming" ? null : (
        <div className="actionBtn">
          <Button>Cancel</Button>
          <Button variant={"primary"}>Reschedule</Button>
        </div>
      )}
    </div>
  );
};

export default ServiceInfoCard;
