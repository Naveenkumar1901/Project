import React, { useState } from "react";
import "../styles/serviceParticulars.css";
import Button from "../reusableComponent/Button";
import ServiceParticularsField from "../reusableComponent/ServiceParticularsField";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import ServiceCostDetails from "../reusableComponent/ServiceCostDetails";
import { useNavigate } from "react-router-dom";
const Payment = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({});
  const [paymentMode, setPaymentMode] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    console.log(formValue);
  };
  const setState = (value, fieldName) => {
    setFormValue((prevState) => ({ ...prevState, [fieldName]: value }));
  };

  return (
    <div className="serviceParticularsContainer">
      <div className="serviceParticularsHeader">
        <HiOutlineCurrencyRupee className="paymentIcon" />
        <p className="serviceParticularsTitle">Payment</p>
      </div>
      <form
        className="serviceParticularsInnerContainer"
        onSubmit={(e) => submitForm(e)}
      >
        <div className="costDetails">
          <ServiceCostDetails costParticular="Booking Fees" costValue="50Rs" />
          <ServiceCostDetails costParticular="Water wash" costValue="150Rs" />
          <ServiceCostDetails
            costParticular="Spare charges"
            costValue="2000Rs"
          />
          <ServiceCostDetails
            costParticular="Labour charges"
            costValue="500Rs"
          />
          <ServiceCostDetails
            costParticular="Service charges"
            costValue="2000Rs"
          />
          <ServiceCostDetails costParticular="GST" costValue="18%" />
          <ServiceCostDetails costParticular="Total amount" />
        </div>
        <ServiceParticularsField
          fieldName="Payment mode"
          onChange={(value) => {
            setState(value, "paymentMode");
            setPaymentMode(value);
          }}
        />
        {paymentMode === "debitCard" || paymentMode === "creditCard" ? (
          <>
            <ServiceParticularsField
              fieldName="Card number"
              type="number"
              maxLength="16"
              onChange={(value) => {
                setState(value, "cardNumber");
              }}
            />
            <ServiceParticularsField
              fieldName="Card holder name"
              onChange={(value) => {
                setState(value, "cardHolderName");
              }}
            />
            <ServiceParticularsField
              fieldName="CVV code"
              type="number"
              maxLength="3"
              onChange={(value) => {
                setState(value, "cvvCode");
              }}
            />
          </>
        ) : paymentMode === "netBanking" ? (
          <>
            <ServiceParticularsField
              fieldName="Bank name"
              onChange={(value) => {
                setState(value, "bankName");
              }}
            />
            <ServiceParticularsField
              fieldName="IFSC code"
              onChange={(value) => {
                setState(value, "ifscCode");
              }}
            />
          </>
        ) : paymentMode === "" ? null : (
          <>
            <ServiceParticularsField
              fieldName="UPI id"
              onChange={(value) => {
                setState(value, "upiId");
              }}
            />
            <ServiceParticularsField
              fieldName="UPI mobile number"
              type="number"
              maxLength="10"
              onChange={(value) => {
                setState(value, "upiMobileNumber");
              }}
            />
          </>
        )}

        <div className="formSubmitBtn">
          <Button
            variant={"primary"}
            type="submit"
            onClick={() => {
              navigate("");
            }}
          >
            Proceed
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
