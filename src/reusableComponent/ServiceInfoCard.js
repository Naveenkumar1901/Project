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

  const insertHyphen = (str) => {
    let newStr = "";
    for (let i = 0; i < str.length; i = i + 1) {
      const currentValue = str[i];
      const nextValue = str[i + 1];
      console.log(newStr, "string");
      newStr += currentValue;
      console.log(isNaN(parseInt(currentValue)));

      console.log(isNaN(parseInt(nextValue)));
      if (
        (isNaN(parseInt(currentValue)) === true &&
          isNaN(parseInt(nextValue)) === false &&
          nextValue !== undefined) ||
        (isNaN(parseInt(currentValue)) === false &&
          isNaN(parseInt(nextValue)) === true &&
          nextValue !== undefined)
      )
        newStr += "-";
      // if (nextValue) newStr += nextValue;
    }
    // console.log(newStr, "split");
    return newStr;
  };

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
          <p className="carNoValue">
            {props.carNo && insertHyphen(props.carNo)}
          </p>
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
              onClick={() =>
                navigate(
                  `/home/services/${
                    props.customerData.ServiceList[
                      props.customerData.ServiceList.length - 1
                    ].ServiceName
                  }?regNumber=${props.customerData.RegNumber}`
                )
              }
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
