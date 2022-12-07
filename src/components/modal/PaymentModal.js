import React from "react";
import deliveredInfo from "../../data/deliveredData";

const PaymentModal = ({ id }) => {
  const result = deliveredInfo.find(function (eachData) {
    return eachData.id === id;
  });
  console.log(result);
  return (
    <div className="paymentModalContainer">
      <div className="paymentDetailsHeader">
        <p className="headerTitle">Payment Details</p>
      </div>
      <div className="paymentStatusSection">
        <p className="paymentStatus">Payment status</p>
        <p className="paymentStatusProps">{result.paymentStatus}</p>
      </div>
      <div className="paymentModeSection">
        <p className="paymentMode">Payment mode</p>
        <p className="paymentModeProps">{result.paymentMode}</p>
      </div>
      <div className="bookingFeesSection">
        <p className="bookingFees">Booking fees</p>
        <p className="bookingFeesProps">{result.bookingFees}</p>
      </div>
    </div>
  );
};

export default PaymentModal;
