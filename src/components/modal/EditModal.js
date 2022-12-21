import React from "react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Button from "../../reusableComponent/Button";
import ServiceParticularsField from "../../reusableComponent/ServiceParticularsField";

const EditModal = ({ hideEditDetails, editModalId, data, setData }) => {
  console.log(data);
  const result = data.find((eachData) => {
    return eachData.id === editModalId;
  });

  const [customerDetails, setCustomerDetails] = useState(result);

  const handleEdit = () => {
    const newData = data.map((eachData) =>
      eachData.id === editModalId ? customerDetails : eachData
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
        <ServiceParticularsField
          fieldName="Customer name"
          value={customerDetails.customerName}
          onChange={(value) => {
            handleChange(value, "customerName");
          }}
        />
        <ServiceParticularsField
          fieldName="Car number"
          value={customerDetails.carNo}
          onChange={(value) => {
            handleChange(value, "carNor");
          }}
        />
        <ServiceParticularsField
          fieldName="Car name"
          value={customerDetails.carName}
          onChange={(value) => {
            handleChange(value, "carName");
          }}
        />
        <ServiceParticularsField
          fieldName="Delivery status"
          value={customerDetails.deliveryStatus}
          onChange={(value) => {
            handleChange(value, "deliveryStatus");
          }}
        />
        <ServiceParticularsField
          fieldName="Delivery date"
          value={customerDetails.deliveryDate}
          type="date"
          onChange={(value) => {
            handleChange(value, "deliveryDate");
          }}
        />
        <ServiceParticularsField
          fieldName="Delivery time"
          value={customerDetails.deliveryTime}
          type="time"
          onChange={(value) => {
            handleChange(value, "deliveryTime");
          }}
        />
        <ServiceParticularsField
          fieldName="Payment status"
          value={customerDetails.paymentStatus}
          onChange={(value) => {
            handleChange(value, "paymentStatus");
          }}
        />
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
