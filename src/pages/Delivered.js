import React, { useState } from "react";
import "../styles/delivered.css";
import deliveredInfo from "../data/deliveredData";
import SearchBar from "../reusableComponent/SearchBar";
import { BiSearchAlt2 } from "react-icons/bi";
import Input from "../reusableComponent/Input";
import { AiOutlineEye } from "react-icons/ai";
import Modal from "react-modal";
import { RiDeleteBinLine } from "react-icons/ri";
import PaymentModal from "../components/modal/PaymentModal";
import DeleteInfo from "../components/modal/DeleteInfoModal";

const Delivered = () => {
  const [data, setData] = useState(deliveredInfo);
  const [dateFilters, setDateFilters] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [value, setSearchValue] = useState("");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      boxShadow: "10px 10px 10px 10px rgba(135, 135, 135, 0.25)",
      borderRadius: "10px",
      backgroundColor: "#ffffff",
      border: "none",
    },
  };
  const keys = ["ownerName", "carName", "carNo", "time", "status"];

  const handleSearch = (input) => {
    let filteredSearch = deliveredInfo.filter((eachItem) =>
      keys.some((key) =>
        eachItem[key].toLowerCase().includes(input.toLowerCase())
      )
    );
    setData(filteredSearch);
  };

  const searchWithDate = () => {
    dateFilters.start &&
      dateFilters.end &&
      setData(
        deliveredInfo.filter(
          ({ date }) =>
            new Date(date) >= dateFilters.start &&
            new Date(date) <= dateFilters.end
        )
      );
  };
  const setDateFilter = (e, type) => {
    console.log(type, e);
    setDateFilters((prevState) => ({
      ...prevState,
      [type]: new Date(e),
    }));
  };

  const hideModal = () => {
    setShowDeleteModal(false);
  };

  const hidePaymentModal = () => {
    setShowPaymentModal(false);
  };

  return (
    <>
      <Modal isOpen={showPaymentModal || showDeleteModal} style={customStyles}>
        {" "}
        {showPaymentModal ? (
          <PaymentModal
            id={showPaymentModal}
            hidePaymentModal={hidePaymentModal}
          />
        ) : (
          <DeleteInfo hideModal={hideModal} id={showDeleteModal} />
        )}
      </Modal>
      <div className="deliveredPage">
        <div className="deliveredNavBar">
          <div className="deliveredSearch">
            <SearchBar
              value={value}
              setSearchValue={setSearchValue}
              filterFunction={(input) => handleSearch(input)}
            />
          </div>
          <div className="dateFilter">
            <Input type="date" onChange={(e) => setDateFilter(e, "start")} />
            <p className="dateFilterText"> - </p>
            <Input type="date" onChange={(e) => setDateFilter(e, "end")} />
            <div className="dateSearchWrapper">
              <BiSearchAlt2 className="dateSearch" onClick={searchWithDate} />
            </div>
          </div>
        </div>
        <div className="tableContainer">
          <table className="tableParticulars">
            <thead>
              <tr>
                <th>SI.no</th>
                <th>Owner name</th>
                <th>Car name</th>
                <th>Car no</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {data.length ? (
              data.map((filteredData) => {
                return (
                  <tbody>
                    <tr>
                      <td>{filteredData.id}</td>
                      <td>{filteredData.ownerName}</td>
                      <td>{filteredData.carName}</td>
                      <td>{filteredData.carNo}</td>
                      <td>{filteredData.date}</td>
                      <td>{filteredData.time}</td>
                      <td
                        style={{
                          color:
                            filteredData.status === "Delivered"
                              ? "#3A7F0D"
                              : "#EB4335",
                        }}
                      >
                        {filteredData.status}
                      </td>
                      <td>
                        <div className="actionIcons">
                          <AiOutlineEye
                            className="actionEyeIcon"
                            onClick={() => setShowPaymentModal(filteredData.id)}
                          />{" "}
                          <RiDeleteBinLine
                            className="actionDeleteIcon"
                            onClick={() => setShowDeleteModal(filteredData.id)}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                );
              })
            ) : (
              <p className="errorMsg">No item found!</p>
            )}
          </table>
        </div>
        <div className="paginationContainer"></div>
      </div>
    </>
  );
};

export default Delivered;
