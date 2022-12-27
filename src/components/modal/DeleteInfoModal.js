import "../../styles/deleteInfoModal.css";
import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import Button from "../../reusableComponent/Button";
import { useSelector } from "react-redux";

const DeleteInfo = ({ hideDeleteModal, deleteId, customerId }) => {
  const customerDetails = useSelector(
    (state) => state.customer.customerDetails
  );
  const result = customerDetails.find(function (eachData) {
    return eachData.ID === deleteId || eachData.ID === customerId;
  });
  console.log(result, "id");
  const handleDelete = () => {
    let indexPosition = customerDetails.indexOf(result);
    if (indexPosition >= 0) {
      customerDetails.splice(indexPosition, 1);
    }
    hideDeleteModal(true);
  };

  return (
    <div className="deleteInfoContainer">
      <RiDeleteBinLine className="deleteIcon" />
      <h1 className="deleteQuestion">Are you sure?</h1>
      <p className="deleteStatement">Do you really want to delete.</p>
      <div className="deleteAction">
        <Button variant={"secondary"} onClick={hideDeleteModal}>
          Cancel
        </Button>
        <Button variant={"primary"} onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default DeleteInfo;
