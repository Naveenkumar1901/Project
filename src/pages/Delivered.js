import React from "react";
import Sidebar from "../components/Sidebar";
import ServicesBase from "../reusableComponent/ServicesBase";
import "../styles/delivery.css";
import deliveredData from "../data/deliveredData";
const Delivered = () => {
  return (
    <div className="deliveredContainer">
      <div className="deliveredSidebar">
        <Sidebar
          displayName="Abcd"
          home="Home"
          upcomingCars="Upcoming cars"
          outgoingCars="Outgoing cars"
          scheduleAppointment="Schedule appointment"
        />
      </div>
      <div className="deliveredPage">
        {/* <div className="deliveredNavbar">
          <ServicesBase
            navigation1="Delivered cars"
            navigation2="Details"
            navRoute1="/delivered"
            navRoute2="/delivered/details"
          />
        </div> */}

        <div className="tableContainer">
          <table className="deliveredCars">
            <th>SI.no</th>
            <th>Owner name</th>
            <th>Car name</th>
            <th>Car no</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            {deliveredData.map((data) => {
              return (
                <tr>
                  <td>{data.id}</td>
                  <td>{data.ownerName}</td>
                  <td>{data.carName}</td>
                  <td>{data.carNo}</td>
                  <td>{data.date}</td>
                  <td>{data.time}</td>
                  <td
                    style={{
                      color: data.status === "delivered" ? "green" : "red",
                    }}
                  >
                    {data.status}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Delivered;
