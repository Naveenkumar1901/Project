import React, { useState } from "react";
import ".././styles/dropdown.css";
const Dropdown = (props, { variant }) => {
  const options = [
    {
      value: "",
      text: "- Choose an option -",
    },
    {
      value: "debitCard",
      text: "Debit card",
    },
    {
      value: "creditCard",
      text: "Credit card",
    },
    {
      value: "netBanking",
      text: "Net banking",
    },
    {
      value: "upi",
      text: "UPI",
    },
  ];
  const [select, setSelect] = useState(options[0].text);

  return (
    <select
      className={`commonDropdownStyle ${variant || ""}`}
      value={select}
      onChange={(e) => {
        setSelect(e.target.value);
        props.onChange(e.target.value);
      }}
    >
      {options.map((eachOption) => (
        <option value={eachOption.value}>{eachOption.text}</option>
      ))}
    </select>
  );
};

export default Dropdown;
