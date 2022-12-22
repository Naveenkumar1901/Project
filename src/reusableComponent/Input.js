import React, { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import "../styles/authenticationBase.css";

const Input = (props) => {
  console.log(props.value);
  const [showPassword, setShowPassword] = useState(false);
  const theme = useSelector((state) => state.color.theme);

  return props.type === "password" ? (
    <div className="eyeIcon">
      <input
        type={!showPassword ? props.type : "text"}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        minLength={props.minLength}
        min={props.min}
        max={props.max}
        className="reusableInput"
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      />
      {!showPassword ? (
        <BsEyeSlashFill
          className={`eyeIconClosed ${
            theme === "dark" ? "dark-theme" : "light-theme"
          }`}
          onClick={() => setShowPassword((prevState) => !prevState)}
        />
      ) : (
        <BsEyeFill
          className={`eyeIconOpened ${
            theme === "dark" ? "dark-theme" : "light-theme"
          }`}
          onClick={() => setShowPassword((prevState) => !prevState)}
        />
      )}
    </div>
  ) : (
    <input
      type={props.type}
      placeholder={props.placeholder}
      maxLength={props.maxLength}
      minLength={props.minLength}
      min={props.min}
      max={props.max}
      className="reusableInput"
      value={props.value}
      onChange={(e) => {
        // const value =
        //   props.type === "checkbox" ? e.target.checked : e.target.value;
        props.onChange(e.target.value);
      }}
    />
  );
};

export default Input;
