import "../styles/upcomingAndSchedule.css";
import React, { useState } from "react";
import SearchBar from "../reusableComponent/SearchBar";
import ServiceInfo from "../reusableComponent/ServiceInfoCard";
import Modal from "react-modal";
import DeleteInfo from "../components/modal/DeleteInfoModal";
import { useSelector } from "react-redux";

const Schedule = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [value, setSearchValue] = useState("");
  const customerDetails = useSelector(
    (state) => state.customer.customerDetails
  );
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
          {customerDetails.map((data) => {
            return data.ServiceList.length >= 1 ? (
              <ServiceInfo
                customerName={data.CustomerName}
                city={data.City}
                carNo={data.RegNumber}
                totalAmount={data.TotalAmount}
                deliveryDate={data.DeliveryDate}
                deliveryTime={data.DeliveryTime}
                status={data.Status}
                onClick={() => {
                  setShowDeleteModal(data.ID);
                }}
              />
            ) : null;
          })}
        </div>
      </div>
    </>
  );
};

export default Schedule;
