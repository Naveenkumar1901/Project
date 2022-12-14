import "../styles/delivered.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";
import React, { useEffect, useState } from "react";
import moment from "moment";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { Pagination, Tooltip, Zoom } from "@mui/material";
import SearchBar from "../reusableComponent/SearchBar";
import Input from "../reusableComponent/Input";
import PaymentDetailsModal from "../components/modal/PaymentDetailsModal";
import DeleteInfo from "../components/modal/DeleteInfoModal";
import EditModal from "../components/modal/EditModal";
import _ from "lodash";

const Delivered = () => {
  const customerDetails = useSelector(
    (state) => state.customer.customerDetails
  );
  const [data, setData] = useState("");
  const [paginatedData, setPaginatedData] = useState(customerDetails);
  const [currentPage, setCurrentPage] = useState("");

  const [dateFilters, setDateFilters] = useState({
    start: moment().format("yyyy-MM-DD"),
    end: "",
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [value, setSearchValue] = useState("");
  const [deleteId, setDeleteId] = useState("");

  const customStyles = {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    boxShadow: "10px 10px 10px 10px rgba(135, 135, 135, 0.25)",
    borderRadius: "10px",
    border: "none",
  };
  const keys = [
    "CustomerName",
    "CarBrand",
    "CarModel",
    "RegNumber",
    "MobileNumber",
    "DeliveryDate",
    "Status",
    "City",
  ];

  // const handleSearch = (input) => {
  //   let filteredSearch = customerDetails.filter((eachItem) =>
  //     keys.some((key) =>
  //       eachItem[key].toLowerCase().includes(input.toLowerCase())
  //     )
  //   );
  //   setData(filteredSearch);
  //   setPaginatedData(_(filteredSearch).slice(0).take(pageSize).value());
  // };

  const searchWithDate = () => {
    dateFilters.start &&
      dateFilters.end &&
      setData(
        customerDetails.filter(
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

  useEffect(() => {
    setData(customerDetails);
    setPaginatedData(_(customerDetails).slice(0).take(pageSize).value());
  }, [customerDetails]);

  const pageSize = 10;
  const pageCount = data ? Math.ceil(data.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginated = _(data).slice(startIndex).take(pageSize).value();
    setPaginatedData(paginated);
  };

  return (
    <>
      <Modal
        isOpen={showPaymentModal || showDeleteModal || showEditModal}
        style={
          showPaymentModal
            ? { content: { ...customStyles, width: "40%", height: "50%" } }
            : showEditModal
            ? { content: { ...customStyles, width: "350px", height: "70%" } }
            : { content: { ...customStyles, width: "300px", height: "250px" } }
        }
      >
        {" "}
        {showPaymentModal ? (
          <PaymentDetailsModal
            paymentModalId={showPaymentModal}
            showEditDetails={showEditDetails}
            hidePaymentDetails={hidePaymentDetails}
          />
        ) : showDeleteModal ? (
          <DeleteInfo hideDeleteModal={hideDeleteModal} deleteId={deleteId} />
        ) : showEditDetails ? (
          <EditModal
            showPaymentDetails={showPaymentDetails}
            showEditDetails={showEditDetails}
            hideEditDetails={hideEditDetails}
            hidePaymentDetails={hidePaymentDetails}
            editModalId={showEditModal}
            data={data}
            setData={setData}
          />
        ) : null}
      </Modal>
      <div className="deliveredPage">
        <div className="deliveredNavBar">
          <div className="deliveredSearch">
            <SearchBar
              value={value}
              setSearchValue={setSearchValue}
              // filterFunction={(input) => handleSearch(input)}
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
            {paginatedData?.map((filteredData, index) => {
              return (
                <tbody>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{filteredData.CustomerName}</td>
                    <td>
                      {filteredData.CarBrand} - {filteredData.CarModel}
                    </td>
                    <td>{filteredData.RegNumber}</td>
                    <td>{filteredData.DeliveryDate}</td>
                    <td>{filteredData.DeliveryTime}</td>
                    <td
                      style={{
                        color:
                          filteredData.Status === "Delivered"
                            ? "#3A7F0D"
                            : "#EB4335",
                      }}
                    >
                      {filteredData.Status}
                    </td>
                    <td>
                      <div className="actionIcons">
                        <Tooltip
                          placement="top"
                          title="Show details"
                          arrow
                          TransitionComponent={Zoom}
                        >
                          <div>
                            <AiOutlineEye
                              className="actionEyeIcon"
                              onClick={() =>
                                setShowPaymentModal(filteredData.ID)
                              }
                            />
                          </div>
                        </Tooltip>
                        <Tooltip
                          placement="top"
                          title="Edit details"
                          arrow
                          TransitionComponent={Zoom}
                        >
                          <div>
                            <TbEdit
                              className="actionEditIcon"
                              onClick={() => setShowEditModal(filteredData.ID)}
                            />
                          </div>
                        </Tooltip>
                        <Tooltip
                          placement="top"
                          title="Delete"
                          arrow
                          TransitionComponent={Zoom}
                        >
                          <div>
                            <RiDeleteBinLine
                              className="actionDeleteIcon"
                              onClick={() => {
                                setShowDeleteModal(true);
                                setDeleteId(filteredData.ID);
                              }}
                            />
                          </div>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
        <div className="paginationContainer">
          <Pagination
            count={pageCount}
            variant="outlined"
            shape="rounded"
            onClick={() => pagination(pages)}
          />
        </div>
      </div>
    </>
  );
};
export default Delivered;
