import "../../styles/paymentModal.css";
import React from "react";
import { IoClose } from "react-icons/io5";
import ServiceCostDetails from "../../reusableComponent/ServiceCostDetails";
import CustomerData from "../../data/CustomerData";

const PaymentModal = ({
  variant,
  paymentModalId,
  hidePaymentDetails,
  text,
}) => {
  const result = CustomerData.find(function (eachData) {
    return eachData.id === paymentModalId;
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
        <ServiceCostDetails
          className="paymentStatusValue"
          costParticular="Payment status"
          costValue={result.paymentStatus}
        />
        {result.paymentStatus === "Payed!" ? (
          <ServiceCostDetails
            costParticular="Payment mode"
            costValue={result.paymentMode}
          />
        ) : null}
        <ServiceCostDetails
          costParticular="Booking Fees (Rs)"
          costValue={result.bookingFees}
        />
        <ServiceCostDetails
          costParticular="Water wash (Rs)"
          costValue={result.waterWash}
        />
        <ServiceCostDetails
          costParticular="Spare charges (Rs)"
          costValue={result.spareCharges}
        />
        <ServiceCostDetails
          costParticular="Labour charges (Rs)"
          costValue={result.labourCharges}
        />
        <ServiceCostDetails
          costParticular="Service charges (Rs)"
          costValue={result.serviceCharges}
        />
        <ServiceCostDetails
          variant={"modalPrimary"}
          costParticular="Total amount with GST"
          costValue={result.totalAmount}
        />
      </div>
    </div>
  );
};

export default PaymentModal;
