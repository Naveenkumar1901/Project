import "../../styles/serviceAndPaymentDetails.css";
import React from "react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

const ServiceDetailsModal = ({ customerId, hideServiceDetailsModal }) => {
  const customerDetails = useSelector(
    (state) => state.customer.customerDetails
  );
  const result = customerDetails.find(function (eachData) {
    return eachData.ID === customerId;
  });

  return (
    <div className="detailsContainer">
      <div className="detailsHeader">
        <div className="closeModalSection">
          <IoClose className="closeIcon" onClick={hideServiceDetailsModal} />
        </div>
        <h1 className="headerTitle">Service Details</h1>
      </div>
      <div className="detailsBody">
        {result?.ServiceList?.map((eachService, index) => (
          <div className="bookedService">
            <div className="eachServiceSection">
              <p className="serviceParticular">
                <p className="serviceCount">{index + 1}. </p>Service adopted
              </p>
              <p className="serviceValue">{eachService.ServiceName}</p>
            </div>
            <div className="eachServiceSection">
              <p className="descriptionParticular">Description</p>
              <p className="descriptionValue">{eachService.Dscription}</p>
            </div>
            <div className="eachServiceSection">
              <p className="costParticular">Service charge</p>
              <p className="costValue">₹{eachService.Amount}</p>
            </div>
          </div>
        ))}
        <div className="totalSection">
          <p className="costParticular">Total amount with GST</p>
          <p className="costValue">₹{result?.TotalAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsModal;
