import React from "react";
import deliveredInfo from "../../data/deliveredData";
import "../../styles/paymentModal.css";
import { IoClose } from "react-icons/io5";
import ServiceCostDetails from "../../reusableComponent/ServiceCostDetails";
import Button from "../../reusableComponent/Button";

const PaymentModal = ({
  variant,
  id,
  hidePaymentDetails,
  showEditPaymentDetails,
}) => {
  const result = deliveredInfo.find(function (eachData) {
    return eachData.id === id;
  });

  const handleClick = () => {
    hidePaymentDetails(true);
    showEditPaymentDetails(true);
  };

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
        <ServiceCostDetails costParticular="GST" costValue="18%" />
        <ServiceCostDetails
          variant={"modalPrimary"}
          costParticular="Total amount"
        />
      </div>
      <div className="editBtn">
        <Button variant={"primary"} onClick={handleClick}>
          Edit details
        </Button>
      </div>
    </div>
  );
};

export default PaymentModal;
