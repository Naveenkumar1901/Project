import React, { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import "../styles/authenticationBase.css";

const Input = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  return props.type === "password" ? (
    <div className="eye-icon">
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
          className="eyeIcon-closed"
          onClick={() => setShowPassword((prevState) => !prevState)}
        />
      ) : (
        <BsEyeFill
          className="eyeIcon-opened"
          onClick={() => setShowPassword((prevState) => !prevState)}
        />
      )}
    </div>
  ) : (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="reusableInput"
      onChange={(e) => {
        const value =
          props.type === "checkbox" ? e.target.checked : e.target.value;
        props.onChange(value);
      }}
    />
  );
};

export default Input;
