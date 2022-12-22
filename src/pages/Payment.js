import "../styles/reusableForm.css";
import React, { useEffect, useState } from "react";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import FormFields from "../reusableComponent/FormFields";
import Button from "../reusableComponent/Button";

const Payment = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({});
  const [paymentMode, setPaymentMode] = useState(0);
  const [costValue, setCostValue] = useState({
    bookingFees: "",
    waterWash: "",
    spareCharges: "",
    labourCharges: "",
    serviceCharges: "",
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
    <div className="formContainer">
      <div className="formHeader">
        <HiOutlineCurrencyRupee className="paymentIcon" />
        <p className="formTitle">Payment</p>
      </div>
      <form className="formInnerContainer" onSubmit={(e) => submitForm(e)}>
        <div className="costDetails">
          <FormFields
            fieldName="Booking fees (Rs)"
            value={costValue.bookingFees}
            onChange={(value) => {
              handleChange(value, "bookingFees");
            }}
          />
          <FormFields
            fieldName="Water wash (Rs)"
            value={costValue.waterWash}
            onChange={(value) => {
              handleChange(value, "waterWash");
            }}
          />
          <FormFields
            fieldName="Spare charges (Rs)"
            value={costValue.spareCharges}
            onChange={(value) => {
              handleChange(value, "spareCharges");
            }}
          />
          <FormFields
            fieldName="Labour charges (Rs)"
            value={costValue.labourCharges}
            onChange={(value) => {
              handleChange(value, "labourCharges");
            }}
          />
          <FormFields
            fieldName="Service charges (Rs)"
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
        <FormFields
          fieldName="Payment mode"
          onChange={(value) => {
            handleValue(value, "paymentMode");
            setPaymentMode(value);
          }}
        />
        {paymentMode === "debitCard" || paymentMode === "creditCard" ? (
          <>
            <FormFields
              fieldName="Card number"
              minLength="08"
              maxLength="19"
              onChange={(value) => {
                handleValue(value, "cardNumber");
              }}
            />
            <FormFields
              fieldName="Card holder name"
              onChange={(value) => {
                handleValue(value, "cardHolderName");
              }}
            />
            <FormFields
              fieldName="CVV code"
              minLength="3"
              maxLength="4"
              onChange={(value) => {
                handleValue(value, "cvvCode");
              }}
            />
          </>
        ) : paymentMode === "netBanking" ? (
          <>
            <FormFields
              fieldName="Bank name"
              onChange={(value) => {
                handleValue(value, "bankName");
              }}
            />
            <FormFields
              fieldName="IFSC code"
              onChange={(value) => {
                handleValue(value, "ifscCode");
              }}
            />
          </>
        ) : paymentMode === "" ? null : (
          <>
            <FormFields
              fieldName="UPI id"
              onChange={(value) => {
                handleValue(value, "upiId");
              }}
            />
            <FormFields
              fieldName="UPI mobile number"
              minLength="10"
              maxLength="10"
              onChange={(value) => {
                handleValue(value, "upiMobileNumber");
              }}
            />
          </>
        )}

        <div className="formBtn">
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
