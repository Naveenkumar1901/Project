import React from "react";
import deliveredInfo from "../../data/deliveredData";
import "../../styles/paymentModal.css";
import { IoClose } from "react-icons/io5";
import ServiceCostDetails from "../../reusableComponent/ServiceCostDetails";

const PaymentModal = ({ id, hidePaymentModal }) => {
  const result = deliveredInfo.find(function (eachData) {
    return eachData.id === id;
  });
  return (
    <div className="paymentModalContainer">
      <div className="paymentDetailsHeader">
        <div className="closeModalSection">
          <IoClose className="closeIcon" onClick={hidePaymentModal} />
        </div>
        <h1 className="headerTitle">Payment Details</h1>
      </div>
      <div className="paymentDetailsBody">
        <ServiceCostDetails
          variant={"costParticularPrimary"}
          className={`paymentStatusValue ${
            result.paymentStatus === "Payed!" ? "greenColor" : "redColor"
          }`}
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
          costParticular="Booking Fees"
          costValue={result.bookingFees}
        />
        <ServiceCostDetails
          costParticular="Water wash"
          costValue={result.waterWash}
        />
        <ServiceCostDetails
          costParticular="Spare charges"
          costValue={result.spareCharges}
        />
        <ServiceCostDetails
          costParticular="Labour charges"
          costValue={result.labourCharges}
        />
        <ServiceCostDetails
          costParticular="Service charges"
          costValue={result.serviceCharges}
        />
        <ServiceCostDetails costParticular="GST" costValue="18%" />
        <ServiceCostDetails
          variant={"modalPrimary"}
          costParticular="Total amount"
        />
      </div>
    </div>
  );
};

export default PaymentModal;
