import Button from "../../reusableComponent/Button";
import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import "../../styles/deleteInfoModal.css";
import deliveredInfo from "../../data/deliveredData";

const DeleteInfo = ({ hideModal, id }) => {
  const result = deliveredInfo.find(function (eachData) {
    return eachData.id === id;
  });

  const handleDelete = () => {
    const indexPosition = deliveredInfo.indexOf(result);
    if (indexPosition >= 0) {
      deliveredInfo.splice(indexPosition, 1);
    }
    hideModal(true);
  };

  return (
    <div className="deleteInfoContainer">
      <RiDeleteBinLine className="deleteIcon" />
      <h1 className="deleteQuestion">Are you sure?</h1>
      <p className="deleteStatement">Do you really want to delete.</p>
      <div className="deleteAction">
        <Button variant={"secondary"} onClick={hideModal}>
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
