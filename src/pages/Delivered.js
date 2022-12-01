import React, { useState } from "react";
import SideBar from "../components/SideBar";
import "../styles/delivered.css";
import deliveredInfo from "../data/deliveredData";
import SearchBar from "../reusableComponent/SearchBar";
import { BiCalendar } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { Pagination } from "@mui/material";
import BasicDatePicker from "../reusableComponent/DatePicker";

const Delivered = () => {
  const [search, setSearch] = useState(deliveredInfo);
  const [err, setErr] = useState(false);
  const handleSearch = (e) => {
    let input = e.target.value;
    let filteredSearch = deliveredInfo.filter((eachItem) =>
      eachItem.ownerName.toLowerCase().includes(input.toLowerCase())
    );
    setSearch(filteredSearch);
    if (search !== input) {
      setErr(true);
    }
  };

  return (
    <div className="deliveredContainer">
      <div className="deliveredSidebar">
        <SideBar
          displayName="Abcd"
          home="Home"
          upcomingCars="Upcoming cars"
          outgoingCars="Outgoing cars"
          scheduleAppointment="Schedule appointment"
        />
      </div>
      <div className="deliveredPage">
        <div className="deliveredNavBar">
          <div className="deliveredSearch">
            <div className="searchSection">
              <input
                type="text"
                placeholder="Search"
                className="search"
                onChange={(e) => handleSearch(e)}
              />
              <IoClose className="closeIcon" />
            </div>
          </div>
          <div className="dateFilter">
            <p className="dateFilterText">Filter date: from</p>

            <BiCalendar className="calendarFilter" />
            <p className="dateFilterText">to</p>
            <BiCalendar className="calendarFilter" />
          </div>
        </div>
        <div className="tableContainer">
          <table className="tableParticulars">
            <thead>
              <th>SI.no</th>
              <th>Owner name</th>
              <th>Car name</th>
              <th>Car no</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
            </thead>
            {search
              ? search.map((filteredData) => {
                  return (
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
                      <td>{filteredData.action}</td>
                    </tr>
                  );
                })
              : err && <p>No item found!</p>}
          </table>
        </div>
        <div className="paginationContainer">
          {/* <BasicDatePicker /> */}
          <Pagination
            count={10}
            shape="rounded"
            showFirstButton
            showLastButton
          />
        </div>
      </div>
    </div>
  );
};

export default Delivered;
