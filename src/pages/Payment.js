import React, { useEffect, useState } from "react";
import "../styles/eachServiceAndPaymentForm.css";
import Button from "../reusableComponent/Button";
import ServiceParticularsField from "../reusableComponent/ServiceParticularsField";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const Payment = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({});
  const [paymentMode, setPaymentMode] = useState(0);
  const [costValue, setCostValue] = useState({
    bookingFees: 0,
    waterWash: 0,
    spareCharges: 0,
    labourCharges: 0,
    serviceCharges: 0,
  });
  const [totalValue, setTotalValue] = useState(0);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formValue);
    console.log(costValue);
    console.log("Total", totalValue);
  };
  const handleValue = (value, fieldName) => {
    setFormValue((prevState) => ({ ...prevState, [fieldName]: value }));
  };

  useEffect(() => {
    const sum =
      parseInt(costValue.bookingFees) +
      parseInt(costValue.waterWash) +
      parseInt(costValue.spareCharges) +
      parseInt(costValue.labourCharges) +
      parseInt(costValue.serviceCharges);
    const value = sum + sum * 0.18;
    sum ? setTotalValue(value) : setTotalValue(0);
  }, [costValue]);

  const handleChange = (value, fieldName) => {
    setCostValue({ ...costValue, [fieldName]: value });
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
          <ServiceParticularsField
            fieldName="Booking fees (Rs)"
            type="number"
            value={costValue.bookingFees}
            onChange={(value) => {
              handleChange(value, "bookingFees");
            }}
          />
          <ServiceParticularsField
            fieldName="Water wash (Rs)"
            value={costValue.waterWash}
            type="number"
            onChange={(value) => {
              handleChange(value, "waterWash");
            }}
          />
          <ServiceParticularsField
            fieldName="Spare charges (Rs)"
            type="number"
            value={costValue.spareCharges}
            onChange={(value) => {
              handleChange(value, "spareCharges");
            }}
          />
          <ServiceParticularsField
            fieldName="Labour charges (Rs)"
            type="number"
            value={costValue.labourCharges}
            onChange={(value) => {
              handleChange(value, "labourCharges");
            }}
          />
          <ServiceParticularsField
            fieldName="Service charges (Rs)"
            type="number"
            value={costValue.serviceCharges}
            onChange={(value) => {
              handleChange(value, "serviceCharges");
            }}
          />
          <div className="totalAmountSection">
            <p className="totalAmountParticular">
              Total amount including 18% GST
            </p>
            <p className="totalAmountValue">₹{totalValue} </p>
          </div>
        </div>
        <ServiceParticularsField
          fieldName="Payment mode"
          onChange={(value) => {
            handleValue(value, "paymentMode");
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
                handleValue(value, "cardNumber");
              }}
            />
            <ServiceParticularsField
              fieldName="Card holder name"
              onChange={(value) => {
                handleValue(value, "cardHolderName");
              }}
            />
            <ServiceParticularsField
              fieldName="CVV code"
              type="number"
              maxLength="3"
              onChange={(value) => {
                handleValue(value, "cvvCode");
              }}
            />
          </>
        ) : paymentMode === "netBanking" ? (
          <>
            <ServiceParticularsField
              fieldName="Bank name"
              onChange={(value) => {
                handleValue(value, "bankName");
              }}
            />
            <ServiceParticularsField
              fieldName="IFSC code"
              onChange={(value) => {
                handleValue(value, "ifscCode");
              }}
            />
          </>
        ) : paymentMode === "" ? null : (
          <>
            <ServiceParticularsField
              fieldName="UPI id"
              onChange={(value) => {
                handleValue(value, "upiId");
              }}
            />
            <ServiceParticularsField
              fieldName="UPI mobile number"
              type="number"
              maxLength="10"
              onChange={(value) => {
                handleValue(value, "upiMobileNumber");
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
