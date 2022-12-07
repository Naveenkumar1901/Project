import React, { useState } from "react";
import { BiCalendar } from "react-icons/bi";
import { MdAccessTimeFilled } from "react-icons/md";
import "../styles/serviceInfoCard.css";
import Button from "./Button";
import Modal from "react-modal";
import DeleteInfo from "../components/modal/DeleteInfoModal";
import { useNavigate } from "react-router-dom";
const ServiceInfoCard = (props) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      boxShadow: "10px 10px 10px 10px rgba(135, 135, 135, 0.25)",
      borderRadius: "10px",
      backgroundColor: "#ffffff",
      border: "none",
    },
  };
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const hideModal = () => {
    setShowDeleteModal(false);
  };
  const navigate = useNavigate();
  return (
    <>
      <Modal isOpen={showDeleteModal} style={customStyles}>
        <DeleteInfo hideModal={hideModal} />
      </Modal>
      <div className="serviceInfoContainer">
        <div className="ownerNameSection">
          <p className="ownerNameText">Owner name</p>
          <p className="ownerNameValue">{props.ownerName}</p>
        </div>
        {/* <div className="carNameSection">
          <p className="carNameText">Car name </p>
          <p className="carNameProps">{props.carName}</p>
        </div> */}
        <div className="carNoSection">
          <p className="carNoText">Car no</p>
          <p className="carNoValue">{props.carNo}</p>
        </div>
        <div className="serviceNameSection">
          <p className="serviceNameText">Service name</p>
          <p className="serviceNameValue">{props.serviceName}</p>
        </div>
        <hr className="separationLine" />
        <div className="scheduleStatus">
          <div className="calendar">
            <BiCalendar color="gray" />
            <p className="dateValue">{props.date}</p>
          </div>
          <div className="time">
            <MdAccessTimeFilled color="gray" />
            <p className="timeValue">{props.time}</p>
          </div>
          <div className="status">
            <span
              className={`dotIcon ${
                props.status === "confirmed"
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
        {props.status === "upcoming" ? null : (
          <div className="actionBtn">
            <Button
              variant={"secondary"}
              onClick={() => setShowDeleteModal(true)}
            >
              Cancel
            </Button>
            <Button
              variant={"compact"}
              onClick={() => navigate("/services/carService")}
            >
              Reschedule
            </Button>
            <Button
              variant={"compact"}
              onClick={() => navigate("/schedule/payment")}
            >
              Payment
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default ServiceInfoCard;
