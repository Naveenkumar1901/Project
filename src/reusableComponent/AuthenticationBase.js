import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "../styles/loading.css";
import Google from "../assets/google-icon.png";
import "../styles/authenticationBase.css";
import { BsArrowLeft } from "react-icons/bs";
import Input from "./Input";
import Button from "./Button";
const AuthenticationBase = (props) => {
  const [commonState, setCommonState] = useState({});

  const navigate = useNavigate();
  const home = () => {
    props.formName !== "Create new password" &&
      localStorage.setItem("userInfo", JSON.stringify(commonState));
    navigate("/");
  };

  const setCommonStateFunc = (value, fieldName) => {
    setCommonState((prevState) => ({ ...prevState, [fieldName]: value }));
  };

  return (
    <div className="base-container">
      {/* <loading /> */}
      <img src={Logo} alt="" className="logo-image" />
      <div className="base-innerContainer">
        <h2 className="form-heading">{props.formName}</h2>
        {props.renderObjectInputs?.map((value) => (
          <>
            <Input
              type={value.type}
              placeholder={value.placeholder}
              onChange={(e) => setCommonStateFunc(e, value.placeholder)}
            />
          </>
        ))}

        <Link className="forgot-link" to="/resetPassword">
          {props.forgot}
        </Link>
        <Button variant="primary" onClick={home}>
          {props.btnName}
        </Button>
        <span className="ques">
          {props.ques}
          <Link className="route-link" to={props.routeLink}>
            {props.routeName}
          </Link>
        </span>
        {props.formName === "Create new password" ? null : (
          <div className="or-section">
            <hr className="line1" />
            <p className="or-text">OR</p>
            <hr className="line2" />
          </div>
        )}
        {props.formName === "Create new password" ? null : (
          <>
            <Link className="google-auth">{props.googleAuth}</Link>
            <img src={Google} alt="" className="google-icon" />
          </>
        )}
        {props.formName === "Create new password" ? (
          <BsArrowLeft
            className="backwardArrow"
            onClick={() => {
              navigate("/login");
            }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default AuthenticationBase;
