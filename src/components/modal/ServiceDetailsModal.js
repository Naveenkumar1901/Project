import "../../styles/paymentModal.css";
import React from "react";
import { IoClose } from "react-icons/io5";
import ServiceCostDetails from "../../reusableComponent/ServiceCostDetails";
import { useSelector } from "react-redux";

const ServiceDetailsModal = ({ customerId, hideServiceDetailsModal }) => {
  const customerDetails = useSelector(
    (state) => state.customer.customerDetails
  );
  const result = customerDetails.find(function (eachData) {
    return eachData.ID === customerId;
  });

  return (
    <div className="paymentModalContainer">
      <div className="paymentDetailsHeader">
        <div className="closeModalSection">
          <IoClose className="closeIcon" onClick={hideServiceDetailsModal} />
        </div>
        <h1 className="headerTitle">Service Details</h1>
      </div>
      <div className="paymentDetailsBody">
        {result?.ServiceList?.map((eachService) => (
          <div className="eachService">
            <ServiceCostDetails
              className="paymentStatusValue"
              costParticular="Service adopted"
              costValue={eachService.ServiceName}
            />
            <ServiceCostDetails
              costParticular="Description"
              costValue={eachService.Dscription}
            />
            <ServiceCostDetails
              costParticular="Service charge"
              costValue={eachService.Amount}
            />
          </div>
        ))}

        <ServiceCostDetails
          costParticular="Total amount with GST"
          costValue={result?.TotalAmount}
        />
      </div>
    </div>
  );
};

export default ServiceDetailsModal;
