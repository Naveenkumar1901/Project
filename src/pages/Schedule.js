import "../styles/upcomingAndSchedule.css";
import React, { useState } from "react";
import SearchBar from "../reusableComponent/SearchBar";
import ServiceInfo from "../reusableComponent/ServiceInfoCard";
import customerData from "../data/CustomerData";
import Modal from "react-modal";
import DeleteInfo from "../components/modal/DeleteInfoModal";

const Schedule = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [value, setSearchValue] = useState("");
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

  const hideDeleteModal = () => {
    setShowDeleteModal(false);
  };
  return (
    <>
      <Modal isOpen={showDeleteModal} style={customStyles}>
        <DeleteInfo
          hideDeleteModal={hideDeleteModal}
          scheduleId={showDeleteModal}
        />
      </Modal>
      <div className="servicePageContainer">
        <div className="searchWrapper">
          <SearchBar value={value} setSearchValue={setSearchValue} />
        </div>
        <div className="detailsSection">
          {customerData.map((data) => {
            return (
              <ServiceInfo
                customerName={data.customerName}
                carNo={data.carNo}
                serviceType={data.serviceType}
                deliveryDate={data.deliveryDate}
                deliveryTime={data.deliveryTime}
                scheduleStatus={data.scheduleStatus}
                onClick={() => {
                  setShowDeleteModal(data.id);
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Schedule;
