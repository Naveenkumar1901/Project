import "../../styles/paymentModal.css";
import React from "react";
import { IoClose } from "react-icons/io5";
import ServiceCostDetails from "../../reusableComponent/ServiceCostDetails";
import { useSelector } from "react-redux";

const PaymentModal = ({ paymentModalId, hidePaymentDetails }) => {
  const customerDetails = useSelector(
    (state) => state.customer.customerDetails
  );
  const result = customerDetails.find(function (eachData) {
    return eachData.ID === paymentModalId;
  });

  return (
    <div className="paymentModalContainer">
      <div className="paymentDetailsHeader">
        <div className="closeModalSection">
          <IoClose className="closeIcon" onClick={hidePaymentDetails} />
        </div>
        <h1 className="headerTitle">Payment Details</h1>
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
              costParticular="Service charge"
              costValue={eachService.Amount}
            />
          </div>
        ))}

        <ServiceCostDetails
          costParticular="Total amount with GST"
          costValue={result?.TotalAmount}
        />
        <ServiceCostDetails
          costParticular="Payment Status"
          costValue={result?.PaymentStatus}
        />
        <ServiceCostDetails
          costParticular="Payment Mode"
          costValue={result?.PaymentMode}
        />
      </div>
    </div>
  );
};

export default PaymentModal;
