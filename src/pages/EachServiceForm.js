import "../styles/eachServiceAndPaymentForm.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import services from "../data/serviceSection";
import Button from "../reusableComponent/Button";
import ServiceParticularsField from "../reusableComponent/ServiceParticularsField";

const EachServiceForm = () => {
  const [formValue, setFormValue] = useState({});
  const [dateInput, setDateInput] = useState({
    entryDate: moment().format("yyyy-MM-DD"),
    deliveryDate: "",
  });
  const { serviceName } = useParams();
  const [checkboxArray, setCheckArray] = useState();
  const [icon, setIcon] = useState();
  const [name, setName] = useState();

  const handleChange = (value, fieldName) => {
    setFormValue((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
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
        return setCheckArray([{ fieldName: "Generel service" }]);
      case "wheelService":
        return setCheckArray([
          { fieldName: "New tyre" },
          { fieldName: "Rim design" },
        ]);
      case "paintingService":
        return setCheckArray([
          { fieldName: "Full painting" },
          { fieldName: "Ceramic coating" },
          { fieldName: "Premium polish" },
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
      case "insuranceRenewal":
        return setCheckArray([{ fieldName: "Insurance renewal" }]);
      case "lightService":
        return setCheckArray([
          { fieldName: "Wind shield service" },
          { fieldName: "Lights wirirg" },
        ]);
      case "clutchService":
        return setCheckArray([
          { fieldName: "Clutch plate replace" },
          { fieldName: "Brake shoe replace" },
        ]);
      case "dryCleanService":
        return setCheckArray([
          { fieldName: "Exterior cleaning" },
          { fieldName: "Interior cleaning" },
        ]);
      case "washService":
        return setCheckArray([
          { fieldName: "Premium wash" },
          { fieldName: "General wash" },
        ]);
      case "oilingService":
        return setCheckArray([
          { fieldName: "Engine oil change" },
          { fieldName: "Brake oil change" },
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
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formValue);
        }}
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
          maxLength="10"
          minLength="10"
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
          value={dateInput.entryDate}
          onChange={(value) => {
            setDateInput(value);
            handleChange(value, "entryDate");
          }}
        />
        <ServiceParticularsField
          fieldName="Delivery date"
          type="date"
          value={dateInput.deliveryDate}
          onChange={(value) => {
            setDateInput(value);
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
