import "../styles/upcomingAndSchedule.css";
import React, { useEffect, useState } from "react";
import SearchBar from "../reusableComponent/SearchBar";
import ServiceInfo from "../reusableComponent/ServiceInfoCard";
import Modal from "react-modal";
import DeleteInfo from "../components/modal/DeleteInfoModal";
import { useSelector } from "react-redux";

const Schedule = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [value, setSearchValue] = useState("");
  const loading = useSelector((state) => state.customer.customerLoading);
  const customerDetails = useSelector(
    (state) => state.customer.customerDetails
  );

  useEffect(() => {
    if (customerDetails) {
      let tempArray = [];
      const arr = customerDetails?.forEach((el) => {
        if (el.ServiceList.length > 0) {
          tempArray.push([...el.ServiceList]);
        }
        tempArray.forEach((el) => {
          el.ServiceType = {
            ...el.ServiceCode,
            ServiceTags: el.map((eachService) => eachService.ServiceCode),
          };
        });
      });
      console.log(tempArray, "check");
      console.log(customerDetails, "customerDetails123");
    } else {
      console.log(customerDetails, "customerDetails");
    }
  }, [customerDetails]);

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
        {loading ? (
          <div className="loading" />
        ) : (
          <>
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
                    customerData={data}
                    onClick={() => {
                      setShowDeleteModal(data.ID);
                    }}
                  />
                ) : null;
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Schedule;
