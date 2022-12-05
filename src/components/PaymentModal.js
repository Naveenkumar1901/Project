import React from "react";
import deliveredInfo from "../data/deliveredData";

const PaymentModal = (props) => {
  return (
    <div className="paymentModalContainer">
      <div className="paymentDetailsHeader">
        <p className="headerTitle">Payment Details</p>
      </div>
      <div className="paymentStatusSection">
        <p className="paymentStatus">Payment status</p>
        <p className="paymentStatusProps">{deliveredInfo.paymentStatus}</p>
      </div>
      <div className="paymentModeSection">
        <p className="paymentMode">Payment mode</p>
        <p className="paymentModeProps">{deliveredInfo.paymentMode}</p>
      </div>
      <div className="bookingFeesSection">
        <p className="bookingFees">Booking fees</p>
        <p className="bookingFeesProps">{deliveredInfo.bookingFees}</p>
      </div>
    </div>
  );
};

export default PaymentModal;
