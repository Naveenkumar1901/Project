import React from "react";
import deliveredInfo from "../../data/deliveredData";
import "../../styles/paymentModal.css";
import { IoClose } from "react-icons/io5";

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
        <div className="paymentStatusSection">
          <p className="paymentStatus">Payment status</p>
          <p
            className={`paymentStatusValue ${
              result.paymentStatus === "Payed!" ? "greenColor" : "redColor"
            }`}
          >
            {result.paymentStatus}
          </p>
        </div>
        {result.paymentStatus === "Payed!" ? (
          <div className="paymentModeSection">
            <p className="paymentMode">Payment mode</p>
            <p className="paymentModeValue">{result.paymentMode}</p>
          </div>
        ) : null}
        <div className="bookingFeesSection">
          <p className="bookingFees">Booking fees</p>
          <p className="bookingFeesValue">{result.bookingFees}</p>
        </div>
        <div className="waterWashSection">
          <p className="waterWash">Water wash</p>
          <p className="waterWashValue">{result.waterWash}</p>
        </div>
        <div className="totalServiceSection">
          <p className="totalService">Total service</p>
          <p className="totalServiceValue">{result.totalService}</p>
        </div>
        <div className="totalAmountSection">
          <p className="totalAmount">Total</p>
          <p className="totalAmountValue">{result.totalAmout}</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
