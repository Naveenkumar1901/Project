import "../styles/reusableForm.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import services from "../data/serviceSection";
import Button from "../reusableComponent/Button";
import FormFields from "../reusableComponent/FormFields";
import {
  getCustomerDetails,
  serviceBooking,
} from "../redux/slices/customerSlice";

const EachServiceForm = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("regNumber");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const customerDetails = useSelector(
    (state) => state.customer.customerDetails
  );

  const getUserObject = () => {
    return customerDetails?.find(
      (eachCustomer) => eachCustomer.RegNumber === query
    );
  };

  const value = query
    ? getUserObject
    : customerDetails[customerDetails.length - 1];
  const [formValue, setFormValue] = useState(value);

  useEffect(() => {
    setFormValue(value);
  }, [value]);

  const [dateInput, setDateInput] = useState({
    entryDate: moment().format("yyyy-MM-DD"),
    deliveryDate: "",
  });

  const handleChange = (value, fieldName) => {
    setFormValue((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };
  const loading = useSelector((state) => state.customer.customerLoading);
  const error = useSelector((state) => state.customer.serviceBookingErr);
  const servicebookingOperation = async () => {
    let data = {
      ServiceCode: formValue.ServiceCode,
      MobileNum: formValue.MobileNumber,
      Dscription: formValue.Dscription,
      RegNum: formValue.RegNumber,
    };

    dispatch(serviceBooking(data))
      .unwrap()
      .then(() => {
        dispatch(getCustomerDetails());
        navigate("/schedule");
      })
      .catch(() => {
        error(true);
      });
  };

  const { serviceName } = useParams();

  const [checkboxArray, setCheckArray] = useState();

  const [icon, setIcon] = useState();

  const [name, setName] = useState();
  useEffect(() => {
    const result = services.find(function (eachData) {
      return eachData.routeName === serviceName;
    });
    setIcon(result.icon);
    setName(result.name);

    switch (serviceName) {
      case "carService":
        return setCheckArray([
          {
            fieldName: "Generel service",
            serviceCode: 100,
          },
        ]);
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
      {loading ? (
        <div className="loading" />
      ) : (
        <>
          <div className="formHeader">
            {icon}
            <p className="formTitle">{name}</p>
          </div>
          <form
            className="formInnerContainer"
            onSubmit={(e) => e.preventDefault()}
          >
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
              value={dateInput.entryDate}
              type="date"
              onChange={(value) => {
                setDateInput(value);
                handleChange(value, "EntryDate");
              }}
            />
            <FormFields
              fieldName="Delivery date"
              type="date"
              onChange={(value) => {
                setDateInput(value);
                handleChange(value, "DeliveryDate");
              }}
            />
            <FormFields
              fieldName="Delivery time"
              type="time"
              onChange={(value) => {
                setDateInput(value);
                handleChange(value, "DeliveryTime");
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
        </>
      )}
    </div>
  );
};

export default EachServiceForm;
