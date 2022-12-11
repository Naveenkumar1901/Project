import React, { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import "../styles/authenticationBase.css";

const Input = (props) => {
  console.log(props.value);
  const [showPassword, setShowPassword] = useState(false);
  return props.type === "password" ? (
    <div className="eyeIcon">
      <input
        type={!showPassword ? props.type : "text"}
        placeholder={props.placeholder}
        className="reusableInput"
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      />
      {!showPassword ? (
        <BsEyeSlashFill
          className="eyeIconClosed"
          onClick={() => setShowPassword((prevState) => !prevState)}
        />
      ) : (
        <BsEyeFill
          className="eyeIconOpened"
          onClick={() => setShowPassword((prevState) => !prevState)}
        />
      )}
    </div>
  ) : (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      maxLength={props.maxLength}
      className="reusableInput"
      value={props.value}
      onChange={(e) => {
        const value =
          props.type === "checkbox" ? e.target.checked : e.target.value;
        props.onChange(value);
      }}
    />
  );
};

export default Input;
