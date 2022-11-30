import React from "react";
import { BiCalendar } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";
import "../styles/serviceInfo.css";

const ServiceInfo = (props) => {
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
          <BiCalendar className="calendarIcon" />
          <p className="propsDate">{props.date}</p>
        </div>
        <div className="time">
          <MdAccessTimeFilled className="timeIcon" />
          <p className="propsTime">{props.time}</p>
        </div>
        <div className="status">
          <BsDot
            className="dotIcon"
            style={{
              color: props.status === "confirmed" ? "#3A7F0D" : "#EB4335",
            }}
          />
          <p className="propsStatus">{props.status}</p>
        </div>
      </div>
      {props.status === "confirmed" ? (
        <div className="actionBtn">
          <button className="btn">Cancel</button>
          <button className="btn">Reschedule</button>
        </div>
      ) : null}
    </div>
  );
};

export default ServiceInfo;
