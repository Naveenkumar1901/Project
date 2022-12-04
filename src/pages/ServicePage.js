import React, { useEffect, useState } from "react";
import { GiAutoRepair } from "react-icons/gi";
import ServiceParticulars from "../reusableComponent/ServiceParticulars";
import ServiceParticularsField from "../reusableComponent/ServiceParticularsField";
import SideBar from "../reusableComponent/SideBar";
import "../styles/serviceParticularsPage.css";
import { useParams } from "react-router-dom";

const ServicePage = () => {
  const { serviceName } = useParams();
  const [checkboxArray, setCheckArray] = useState();
  const [formValue, setFormValue] = useState();

  useEffect(() => {
    switch (serviceName) {
      case "carService":
        return setCheckArray([{ fieldName: "polish" }]);
      case "wheelService":
        return setCheckArray([{ fieldName: "puncher" }]);

      default:
        setCheckArray([]);
    }
  }, [serviceName]);

  return (
    <div className="carServiceContainer">
      <div className="carServicePage">
        <ServiceParticulars
          serviceIcon=<GiAutoRepair className="serviceIcon" />
          serviceName={serviceName}
          checkboxArray={checkboxArray}
        />
      </div>
    </div>
  );
};

export default ServicePage;
