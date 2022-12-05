import Button from "../reusableComponent/Button";
import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import "../styles/deleteInfoModal.css";
import { useDispatch } from "react-redux";

const DeleteInfo = () => {
  const dispatch = useDispatch();

  return (
    <div className="deleteInfoContainer">
      <RiDeleteBinLine className="deleteIcon" />
      <h1 className="deleteQuestion">Are you sure?</h1>
      <p className="deleteStatement">Do you really want to delete.</p>
      <div className="deleteAction">
        <Button variant={"secondary"}>Cancel</Button>
        <Button variant={"primary"}>Delete</Button>
      </div>
    </div>
  );
};

export default DeleteInfo;
