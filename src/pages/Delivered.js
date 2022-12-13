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
import moment from "moment";
import { useSelector } from "react-redux";
// import _ from "lodash";
import { Pagination } from "@mui/material";
import EditPaymentModal from "../components/modal/EditPaymentModal";

const Delivered = () => {
  const [data, setData] = useState(deliveredInfo);
  // const [paginatedData, setPaginatedData] = useState();
  const [dateFilters, setDateFilters] = useState({
    start: moment().format("yyyy-MM-DD"),
    end: "",
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showEditPaymentModal, setShowEditPaymentModal] = useState(false);

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
    // setPaginatedData(_(filteredSearch).slice(0).take(pageSize).value());
  };

  const searchWithDate = () => {
    dateFilters.start &&
      dateFilters.end &&
      setData(
        deliveredInfo.filter(
          ({ date }) =>
            moment(date).format("yyyy-MM-DD") >= dateFilters.start &&
            moment(date).format("yyyy-MM-DD") <= dateFilters.end
        )
      );
  };
  const handleChange = (e, type) => {
    setDateFilters((prevState) => ({
      ...prevState,
      [type]: moment(e).format("yyyy-MM-DD"),
    }));
  };

  const hideModal = () => {
    setShowDeleteModal(false);
  };

  const hidePaymentDetails = () => {
    setShowPaymentModal(false);
  };

  const showPaymentDetails = () => {
    setShowPaymentModal(true);
  };

  const hideEditPaymentDetails = () => {
    setShowEditPaymentModal(false);
  };
  const showEditPaymentDetails = () => {
    setShowEditPaymentModal(true);
  };



  const theme = useSelector((state) => state.color.theme);
  // const pageCount = data ? Math.ceil(data.length / pageSize) : 0;
  // if (pageCount === 1) return null;
  // const pages = _.range(1, pageCount + 1);


  return (
    <>
      <Modal isOpen={showPaymentModal || showDeleteModal || showEditPaymentModal} style={customStyles}>
        {" "}
        {showPaymentModal ? (
          <PaymentModal
            id={showPaymentModal}
  
            showEditPaymentDetails={showEditPaymentDetails}
            hidePaymentDetails={hidePaymentDetails}
          

          />
        ) : showDeleteModal?
          (<DeleteInfo
            hideModal={hideModal}
              id={showDeleteModal}
            />) : (<EditPaymentModal
              showPaymentDetails={showPaymentDetails}
            showEditPaymentDetails={showEditPaymentDetails}
              hideEditPaymentDetails={hideEditPaymentDetails}
              hidePaymentDetails={ hidePaymentDetails} />)

        }
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
        <div className="paginationContainer">
          <Pagination count={2} variant="outlined" shape="rounded" />
        </div>
      </div>
    </>
  );
};

export default Delivered;
