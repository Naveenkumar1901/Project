import "../styles/delivered.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";
import React, { useState } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { Pagination } from "@mui/material";
import SearchBar from "../reusableComponent/SearchBar";
import Input from "../reusableComponent/Input";
import Modal from "react-modal";
import PaymentModal from "../components/modal/PaymentModal";
import DeleteInfo from "../components/modal/DeleteInfoModal";
import EditModal from "../components/modal/EditModal";
import customerData from "../data/CustomerData";
// import _ from "lodash";

const Delivered = () => {
  const [data, setData] = useState(customerData);
  // const [paginatedData, setPaginatedData] = useState();
  const [dateFilters, setDateFilters] = useState({
    start: moment().format("yyyy-MM-DD"),
    end: "",
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [value, setSearchValue] = useState("");
  // const pageSize = 10;
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "350px",
      transform: "translate(-50%, -50%)",
      boxShadow: "10px 10px 10px 10px rgba(135, 135, 135, 0.25)",
      borderRadius: "10px",
      border: "none",
    },
  };
  const keys = [
    "serviceType",
    "customerName",
    "carName",
    "carNo",
    "deliveryTime",
    "deliveryStatus",
    "paymentStatus",
    "paymentMode",
  ];

  const handleSearch = (input) => {
    let filteredSearch = customerData.filter((eachItem) =>
      keys.some((key) =>
        eachItem[key].toLowerCase().includes(input.toLowerCase())
      )
    );
    setData(filteredSearch);
    // setPaginatedData(_(filteredSearch).slice(0).take(pageSize).value());
  };

  const searchWithDate = () => {
    dateFilters.start &&
      dateFilters.end &&
      setData(
        customerData.filter(
          ({ deliveryDate }) =>
            moment(deliveryDate).format("yyyy-MM-DD") >= dateFilters.start &&
            moment(deliveryDate).format("yyyy-MM-DD") <= dateFilters.end
        )
      );
  };
  const handleChange = (e, type) => {
    setDateFilters((prevState) => ({
      ...prevState,
      [type]: moment(e).format("yyyy-MM-DD"),
    }));
  };

  const hideDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const hidePaymentDetails = () => {
    setShowPaymentModal(false);
  };

  const showPaymentDetails = () => {
    setShowPaymentModal(true);
  };

  const hideEditDetails = () => {
    setShowEditModal(false);
  };
  const showEditDetails = () => {
    setShowEditModal(true);
  };

  const theme = useSelector((state) => state.color.theme);
  // const pageCount = data ? Math.ceil(data.length / pageSize) : 0;
  // if (pageCount === 1) return null;
  // const pages = _.range(1, pageCount + 1);

  return (
    <>
      <Modal
        isOpen={showPaymentModal || showDeleteModal || showEditModal}
        style={customStyles}
      >
        {" "}
        {showPaymentModal ? (
          <PaymentModal
            id={showPaymentModal}
            showEditDetails={showEditDetails}
            hidePaymentDetails={hidePaymentDetails}
          />
        ) : showDeleteModal ? (
          <DeleteInfo hideDeleteModal={hideDeleteModal} id={showDeleteModal} />
        ) : (
          <EditModal
            showPaymentDetails={showPaymentDetails}
            showEditDetails={showEditDetails}
            hideEditDetails={hideEditDetails}
            hidePaymentDetails={hidePaymentDetails}
          />
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
            <Input
              type="date"
              value={dateFilters.start}
              onChange={(e) => handleChange(e, "start")}
            />
            <p className="dateFilterText"> - </p>
            <Input
              type="date"
              value={dateFilters.end}
              onChange={(e) => handleChange(e, "end")}
            />
            <div className="dateSearchWrapper">
              <BiSearchAlt2 className="dateSearch" onClick={searchWithDate} />
            </div>
          </div>
        </div>
        <div
          className={`tableContainer ${
            theme === "dark" ? "dark-theme" : "light-theme"
          }`}
        >
          <table className="tableParticulars">
            <thead>
              <tr>
                <th>SI.no</th>
                <th>Customer name</th>
                <th>Car name</th>
                <th>Car no</th>
                <th>Delivery date</th>
                <th>Delivery time</th>
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
                      <td>{filteredData.customerName}</td>
                      <td>{filteredData.carName}</td>
                      <td>{filteredData.carNo}</td>
                      <td>{filteredData.deliveryDate}</td>
                      <td>{filteredData.deliveryTime}</td>
                      <td
                        style={{
                          color:
                            filteredData.deliveryStatus === "Delivered"
                              ? "#3A7F0D"
                              : "#EB4335",
                        }}
                      >
                        {filteredData.deliveryStatus}
                      </td>
                      <td>
                        <div className="actionIcons">
                          <AiOutlineEye
                            className="actionEyeIcon"
                            onClick={() => setShowPaymentModal(filteredData.id)}
                          />
                          <TbEdit
                            className="actionEditIcon"
                            onClick={() => setShowEditModal(filteredData.id)}
                          />
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
        <div className="paginationContainer">
          <Pagination count={2} variant="outlined" shape="rounded" />
        </div>
      </div>
    </>
  );
};

export default Delivered;
