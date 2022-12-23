import "../styles/reusableForm.css";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import services from "../data/serviceSection";
import Button from "../reusableComponent/Button";
import FormFields from "../reusableComponent/FormFields";
import {
  getCustomerDetails,
  serviceBooking,
} from "../redux/slices/customerSlice";
import { useDispatch, useSelector } from "react-redux";

const EachServiceForm = () => {
  const customerDetails = useSelector(
    (state) => state.customer.customerDetails
  );
  const [formValue, setFormValue] = useState(
    customerDetails[customerDetails.length - 1]
  );

  useEffect(() => {
    setFormValue(customerDetails[customerDetails.length - 1]);
  }, [customerDetails]);
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
      (obj) => ({ ...obj, ServiceCode: "" }),
      {}
    );
    setFormValue(checkObj);
  }, [checkboxArray]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const scrollRef = useRef();

  const scrollToBottom = () => {
    scrollRef.current.srollBottom = 0;
  };
  const servicebookingOperation = async () => {
    let data = formValue;
    dispatch(serviceBooking(data))
      .unwrap()
      .then(() => {
        dispatch(getCustomerDetails());
        navigate("/schedule");
        // scrollToBottom();
      })
      .catch(() => {
        error(true);
      });
    console.log(data, "payload data");
  };
  const error = useSelector((state) => state.customer.serviceBookingErr);
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
          {
            fieldName: "New tyre",
            serviceCode: 101,
          },
          {
            fieldName: "Rim design",
            serviceCode: 102,
          },
        ]);
      case "paintingService":
        return setCheckArray([
          {
            fieldName: "Full painting",
            serviceCode: 103,
          },
          { fieldName: "Ceramic coating", serviceCode: 104 },
        ]);
      case "acService":
        return setCheckArray([
          { fieldName: "Filter cleaning", serviceCode: 105 },
          { fieldName: "Gas refilling", serviceCode: 106 },
        ]);
      case "cleaningService":
        return setCheckArray([
          { fieldName: "Exterior cleaning", serviceCode: 107 },
          { fieldName: "Interior cleaning", serviceCode: 108 },
        ]);
      case "batteryService":
        return setCheckArray([
          { fieldName: "Battery change", serviceCode: 109 },
          { fieldName: "Battery recharge", serviceCode: 110 },
        ]);
      case "insuranceRenewal":
        return setCheckArray([
          { fieldName: "Insurance renewal", serviceCode: 111 },
        ]);
      case "lightService":
        return setCheckArray([
          { fieldName: "Wind shield service", serviceCode: 112 },
          { fieldName: "Lights wiring", serviceCode: 113 },
        ]);
      case "clutchService":
        return setCheckArray([
          { fieldName: "Clutch plate service", serviceCode: 114 },
          { fieldName: "Brake shoe service", serviceCode: 115 },
        ]);
      case "dryCleanService":
        return setCheckArray([
          { fieldName: "Exterior cleaning", serviceCode: 107 },
          { fieldName: "Interior cleaning", serviceCode: 108 },
        ]);
      case "washService":
        return setCheckArray([{ fieldName: "General wash", serviceCode: 116 }]);
      case "oilingService":
        return setCheckArray([
          { fieldName: "Engine oil change", serviceCode: 117 },
          { fieldName: "Brake oil change", serviceCode: 118 },
        ]);
      default:
        setCheckArray([]);
    }
  }, [serviceName]);

  return (
    <div className="formContainer">
      <div className="formHeader">
        {icon}
        <p className="formTitle">{name}</p>
      </div>
      <form className="formInnerContainer">
        <FormFields
          cularsField
          fieldName="Customer name"
          value={formValue?.CustomerName}
        />
        <FormFields
          fieldName="Mobile number"
          maxLength="10"
          minLength="10"
          value={formValue?.MobileNumber}
          onChange={(value) => {
            handleChange(value, "MobileNum");
          }}
        />
        <FormFields fieldName="Address" value={formValue?.Address} />

        <FormFields
          fieldName="Register number"
          value={formValue?.RegNumber}
          onChange={(value) => {
            handleChange(value, "RegNumber");
          }}
        />
        <FormFields fieldName="Car name" value={formValue?.CarBrand} />
        <FormFields fieldName="Car model" value={formValue?.CarModel} />
        <FormFields
          fieldName="Entry date"
          type="date"
          value={dateInput.entryDate}
          onChange={(value) => {
            setDateInput(value);
            // handleChange(value, "EntryDate");
          }}
        />
        <FormFields
          fieldName="Delivery date"
          type="date"
          value={formValue?.DeliveryDate}
          onChange={(value) => {
            // setDateInput(value);
            // handleChange(value, "DeliveryDate");
          }}
        />
        <FormFields
          fieldName="Description"
          onChange={(value) => {
            handleChange(value, "Dscription");
          }}
        />
        {checkboxArray?.map((val) => {
          return (
            <div className="checkboxSection">
              <FormFields
                fieldName={val.fieldName}
                value={val.serviceCode}
                type="checkbox"
                onChange={(value) => {
                  handleChange(parseInt(value), "ServiceCode");
                }}
              />
            </div>
          );
        })}
        <div className="formBtn">
          <Button
            variant={"primary"}
            type="submit"
            onClick={servicebookingOperation}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EachServiceForm;
