import Button from "../../reusableComponent/Button";
import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import "../../styles/deleteInfoModal.css";
import CustomerData from "../../data/CustomerData";

const DeleteInfo = ({ hideDeleteModal, id }) => {
  const result = CustomerData.find(function (eachData) {
    return eachData.id === id;
  });

  const handleDelete = () => {
    const indexPosition = CustomerData.indexOf(result);
    if (indexPosition >= 0) {
      CustomerData.splice(indexPosition, 1);
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
