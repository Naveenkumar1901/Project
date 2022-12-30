import React from "react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Button from "../../reusableComponent/Button";
import FormFields from "../../reusableComponent/FormFields";

const EditModal = ({ hideEditDetails, editModalId, data, setData }, props) => {
  const result = data.find((eachData) => {
    return eachData.ID === editModalId;
  });

  const [customerDetails, setCustomerDetails] = useState(result);
  const [deliveryStatus, setDeliveryStatus] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("Payed!");

  const handleEdit = () => {
    const newData = data.map((eachData) =>
      eachData.ID === editModalId ? customerDetails : eachData
    );
    setData(newData);
    hideEditDetails(true);
  };

  const submitForm = (e) => {
    e.preventDefault();
  };
  const handleChange = (value, fieldName) => {
    setCustomerDetails((prevState) => ({ ...prevState, [fieldName]: value }));
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
        <FormFields
          fieldName="Customer name"
          value={customerDetails?.CustomerName}
          onChange={(value) => {
            handleChange(value, "customerName");
          }}
        />
        <FormFields
          fieldName="Car number"
          value={customerDetails?.RegNumber}
          onChange={(value) => {
            handleChange(value, "carNumber");
          }}
        />
        <FormFields
          fieldName="Car name"
          value={customerDetails?.CarBrand}
          onChange={(value) => {
            handleChange(value, "carName");
          }}
        />
        <FormFields
          fieldName="Delivery status"
          value={customerDetails?.DeliveryStatus}
          onChange={(value) => {
            handleChange(value, "deliveryStatus");
            setDeliveryStatus(value);
          }}
        />
        {deliveryStatus === "Not delivered" ? (
          <>
            {" "}
            <FormFields
              fieldName="Delivery date"
              value={customerDetails?.DeliveryDate}
              type="date"
              onChange={(value) => {
                handleChange(value, "deliveryDate");
              }}
            />
            <FormFields
              fieldName="Delivery time"
              value={customerDetails?.DeliveryTime}
              type="time"
              onChange={(value) => {
                handleChange(value, "deliveryTime");
              }}
            />
          </>
        ) : null}
        <FormFields
          fieldName="Payment status"
          // value={customerDetails?.PaymentStatus}
          onChange={(value) => {
            handleChange(value, "paymentStatus");
            setPaymentStatus(value);
          }}
        />
        {paymentStatus === "Payed!" ? (
          <FormFields
            fieldName="Payment mode"
            value={customerDetails?.Status}
            onChange={(value) => {
              handleChange(value, "paymentMode");
            }}
          />
        ) : null}
      </div>
      <div className="editBtn">
        <Button variant={"primary"} type="submit" onClick={handleEdit}>
          Save changes
        </Button>
      </div>
    </form>
  );
};

export default EditModal;
