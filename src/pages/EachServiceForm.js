import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import services from "../data/serviceSection";
import Button from "../reusableComponent/Button";
import ServiceParticularsField from "../reusableComponent/ServiceParticularsField";
import "../styles/eachServiceAndPaymentForm.css";

const EachServiceForm = () => {
  const [formValue, setFormValue] = useState({});
  const { serviceName } = useParams();
  const [checkboxArray, setCheckArray] = useState();
  const [icon, setIcon] = useState();
  const [name, setName] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  const handleChange = (value, fieldName) => {
    setFormValue((prevState) => ({ ...prevState, [fieldName]: value }));
  };

  useEffect(() => {
    const checkObj = checkboxArray?.reduce(
      (obj, val) => ({ ...obj, [val.fieldName]: false }),
      {}
    );
    setFormValue(checkObj);
  }, [checkboxArray]);

  useEffect(() => {
    const result = services.find(function (eachData) {
      return eachData.routeName === serviceName;
    });
    setIcon(result.icon);
    setName(result.name);
    switch (serviceName) {
      case "carService":
        return setCheckArray([
          { fieldName: "Water wash" },
          { fieldName: "Premium polish" },
          { fieldName: "Generel service" },
          { fieldName: "Full service" },
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
    <div className="serviceParticularsContainer">
      <div className="serviceParticularsHeader">
        {icon}
        <p className="serviceParticularsTitle">{name}</p>
      </div>
      <form
        className="serviceParticularsInnerContainer"
        onSubmit={(e) => submitForm(e)}
      >
        <ServiceParticularsField
          cularsField
          fieldName="Customer name"
          onChange={(value) => {
            handleChange(value, "customerName");
          }}
        />
        <ServiceParticularsField
          fieldName="Mobile number"
          type="number"
          maxlength="10"
          onChange={(value) => {
            handleChange(value, "mobileNumber");
          }}
        />
        <ServiceParticularsField
          fieldName="Address"
          onChange={(value) => {
            handleChange(value, "address");
          }}
        />
        <ServiceParticularsField
          fieldName="Car name & model"
          onChange={(value) => {
            handleChange(value, "carName&Model");
          }}
        />
        <ServiceParticularsField
          fieldName="Entry date"
          type="date"
          onChange={(value) => {
            handleChange(value, "entryDate");
          }}
        />
        <ServiceParticularsField
          fieldName="Delivery date"
          type="date"
          onChange={(value) => {
            handleChange(value, "deliveryDate");
          }}
        />
        <ServiceParticularsField
          fieldName="Description"
          onChange={(value) => {
            handleChange(value, "description");
          }}
        />
        {checkboxArray?.map((val) => {
          return (
            <div className="checkboxSection">
              <ServiceParticularsField
                fieldName={val.fieldName}
                type="checkbox"
                onChange={(value) => {
                  handleChange(value, val.fieldName);
                }}
              />
            </div>
          );
        })}
        <div className="formSubmitBtn">
          <Button variant={"primary"} type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EachServiceForm;
