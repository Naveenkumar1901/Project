import React, { useState } from "react";
import SideBar from "../reusableComponent/SideBar";
import "../styles/delivered.css";
import deliveredInfo from "../data/deliveredData";
import SearchBar from "../reusableComponent/SearchBar";
import { BiCalendar, BiSearchAlt2 } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import Input from "../reusableComponent/Input";
import { BsEyeFill } from "react-icons/bs";
import Modal from "react-modal";
import ServiceInfo from "../reusableComponent/ServiceInfo";

const Delivered = () => {
  const [data, setData] = useState(deliveredInfo);
  const [dateFilters, setDateFilters] = useState({});

  const [showModal, setShowModal] = useState(false);

  const [value, setSearchValue] = useState("");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const handleSearch = (input) => {
    let filteredSearch = deliveredInfo.filter((eachItem) =>
      eachItem.ownerName.toLowerCase().includes(input.toLowerCase())
    );
    setData(filteredSearch);
    if (data !== input) {
    }
  };

  const showDetails = (id) => {
    setShowModal(true);
    console.log("id", id);
  };
  const deleteDetail = (id) => {};
  const searchWithDate = () => {
    console.log(dateFilters);
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
    setDateFilters((prevState) => ({
      ...prevState,
      [type]: new Date(e.target.value),
    }));
  };

  return (
    <>
      <Modal isOpen={showModal} style={customStyles}>
        <div>
          <p onClick={() => setShowModal(false)}>X</p>
          <ServiceInfo />
        </div>
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
                        <BsEyeFill
                          onClick={() => showDetails(filteredData.id)}
                        />{" "}
                        <BsEyeFill
                          onClick={() => deleteDetail(filteredData.id)}
                        />
                      </td>
                    </tr>
                  </tbody>
                );
              })
            ) : (
              <p>No item found!</p>
            )}
          </table>
        </div>
        <div className="paginationContainer">
          {/* <BasicDatePicker /> */}
          {/* <Pagination
            count={10}
            shape="rounded"
            showFirstButton
            showLastButton
          /> */}
        </div>
      </div>
    </>
  );
};

export default Delivered;
