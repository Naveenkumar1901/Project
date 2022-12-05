import React, { useEffect, useState } from "react";
import { GiAutoRepair } from "react-icons/gi";
import ServiceParticulars from "../reusableComponent/ServiceParticulars";
import ServiceParticularsField from "../reusableComponent/ServiceParticularsField";
import "../styles/serviceParticularsPage.css";
import { useParams } from "react-router-dom";
import services from "../data/serviceSection";

const ServicePage = () => {
  const { serviceName, serviceIcon } = useParams();
  const [checkboxArray, setCheckArray] = useState();
  // const [formValue, setFormValue] = useState();

  useEffect(() => {
    switch (serviceName) {
      case "carService":
        return setCheckArray([
          { fieldName: "Water wash" },
          { fieldName: "Premium polish" },
          { fieldName: "Generel service" },
        ]);
      case "wheelService":
        return setCheckArray([
          { fieldName: "New tyre" },
          { fieldName: "Air filling" },
          { fieldName: "Rim design" },
        ]);
      case "paintingService":
        return setCheckArray([
          { fieldName: "Full painting" },
          { fieldName: "Ceramic coating" },
        ]);
      case "acService":
        return setCheckArray([
          { fieldName: "Filter cleaning" },
          { fieldName: "Gas refilling" },
        ]);
      case "cleaningService":
        return setCheckArray([
          { fieldName: "Exterior cleaning" },
          { fieldName: "Interior cleaning" },
        ]);
      case "batteryService":
        return setCheckArray([
          { fieldName: "Battery change" },
          { fieldName: "Battery recharge" },
        ]);
      case "insuranceService":
        return setCheckArray([{ fieldName: "Insurance renewal" }]);
      case "lightService":
        return setCheckArray([
          { fieldName: "Wind shield service" },
          { fieldName: "Lights wirirg" },
          { fieldName: "Lights change" },
        ]);
      case "clutchService":
        return setCheckArray([
          { fieldName: "Clutch plate replace" },
          { fieldName: "Brake shoe replace" },
          { fieldName: "Brake oil change" },
        ]);
      case "dryCleanService":
        return setCheckArray([
          { fieldName: "Interior dry clean" },
          { fieldName: "Seats cleaning" },
        ]);
      case "washService":
        return setCheckArray([
          { fieldName: "Premium wash" },
          { fieldName: "General wash" },
        ]);
      case "oilingService":
        return setCheckArray([
          { fieldName: "Engine oil change" },
          { fieldName: "Grease apply" },
        ]);

      default:
        setCheckArray([]);
    }
  }, [serviceName]);

  return (
    <div className="carServiceContainer">
      <div className="carServicePage">
        {/* {services.map((eachForm) => {
          return (
            <ServiceParticulars
              icon={eachForm.icon}
              name={eachForm.name}
              checkboxArray={checkboxArray}
            />
          );
        })} */}
        <ServiceParticulars
          serviceIcon={serviceIcon}
          serviceName={serviceName}
          checkboxArray={checkboxArray}
        />
      </div>
    </div>
  );
};

export default ServicePage;
