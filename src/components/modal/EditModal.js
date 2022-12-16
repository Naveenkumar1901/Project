import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Button from "../../reusableComponent/Button";
import ServiceParticularsField from "../../reusableComponent/ServiceParticularsField";

const EditModal = ({ hideEditDetails }) => {
  const [costValue, setCostValue] = useState({
    bookingFees: "",
    waterWash: "",
    spareCharges: "",
    serviceCharges: "",
    labourCharges: "",
  });

  const [totalValue, setTotalValue] = useState(0);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(costValue);
    console.log("Total", totalValue);
  };

  useEffect(() => {
    const sum =
      parseInt(costValue.bookingFees) +
      parseInt(costValue.waterWash) +
      parseInt(costValue.spareCharges) +
      parseInt(costValue.serviceCharges) +
      parseInt(costValue.labourCharges);
    const value = sum + sum * 0.18;
    sum ? setTotalValue(value) : setTotalValue(0);
  }, [costValue]);

  const handleChange = (value, fieldName) => {
    setCostValue({ ...costValue, [fieldName]: value });
  };
  return (
    <form className="paymentModalContainer" onSubmit={(e) => submitForm(e)}>
      <div className="paymentDetailsHeader">
        <div className="closeModalSection">
          <IoClose className="closeIcon" onClick={hideEditDetails} />
        </div>
        <h1 className="headerTitle">Edit Details</h1>
      </div>
      <div className="paymentDetailsBody">
        <ServiceParticularsField
          fieldName="Payment status"
          onChange={(value) => {
            handleChange(value, "paymentStatus");
          }}
        />
        <ServiceParticularsField
          fieldName="Payment mode"
          onChange={(value) => {
            handleChange(value, "paymentMode");
          }}
        />
        <ServiceParticularsField
          fieldName="Booking Fees (Rs)"
          value={costValue.bookingFees}
          onChange={(value) => {
            handleChange(value, "bookingFees");
          }}
        />
        <ServiceParticularsField
          fieldName="Water wash (Rs)"
          value={costValue.waterWash}
          onChange={(value) => {
            handleChange(value, "waterWash");
          }}
        />
        <ServiceParticularsField
          fieldName="Spare charges (Rs)"
          value={costValue.spareCharges}
          onChange={(value) => {
            handleChange(value, "spareCharges");
          }}
        />
        <ServiceParticularsField
          fieldName="Labour charges (Rs)"
          value={costValue.labourCharges}
          onChange={(value) => {
            handleChange(value, "labourCharges");
          }}
        />
        <ServiceParticularsField
          fieldName="Service Charges (Rs)"
          value={costValue.serviceCharges}
          onChange={(value) => {
            handleChange(value, "serviceCharges");
          }}
        />
        <div className="totalAmountSection">
          <p className="totalAmountParticular">Total amount with GST</p>
          <p className="totalAmountValue">₹{totalValue} </p>
        </div>
      </div>
      <div className="editBtn">
        <Button variant={"primary"} type="submit">
          Save changes
        </Button>
      </div>
    </form>
  );
};

export default EditModal;
