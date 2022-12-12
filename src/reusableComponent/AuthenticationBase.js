import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "../styles/loading.css";
import Google from "../assets/google-icon.png";
import "../styles/authenticationBase.css";
import { BsArrowLeft } from "react-icons/bs";
import Input from "./Input";
import Button from "./Button";
import { useSelector } from "react-redux";
const AuthenticationBase = (props) => {
  const [commonState, setCommonState] = useState({});

  const navigate = useNavigate();
  const home = () => {
    props.formName !== "Create new password" &&
      localStorage.setItem("userInfo", JSON.stringify(commonState));
    navigate("/home");
  };

  const setCommonStateFunc = (value, fieldName) => {
    setCommonState((prevState) => ({ ...prevState, [fieldName]: value }));
  };
  const theme = useSelector((state) => state.color.theme);
  return (
    <div
      className={`baseContainer ${
        theme === "dark" ? "dark-theme" : "light-theme"
      }`}
    >
      {/* <loading /> */}
      <img src={Logo} alt="" className="logoImage" />
      <div
        className={`baseInnerContainer ${
          theme === "dark" ? "dark-theme" : "light-theme"
        }`}
      >
        <h2 className="formHeading">{props.formName}</h2>
        {props.renderObjectInputs?.map((value) => (
          <div className="authenticationFields">
            <Input
              type={value.type}
              placeholder={value.placeholder}
              onChange={(e) => setCommonStateFunc(e, value.placeholder)}
            />
          </div>
        ))}

        <Link className="forgotLink" to="/resetPassword">
          {props.forgot}
        </Link>
        <Button variant="primary" onClick={home}>
          {props.btnName}
        </Button>
        <span className="ques">
          {props.ques}
          <Link className="routeLink" to={props.routeLink}>
            {props.routeName}
          </Link>
        </span>
        {props.formName === "Reset Password" ? null : (
          <div className="orSection">
            <hr className="line1" />
            <p className="orText">OR</p>
            <hr className="line2" />
          </div>
        )}
        {props.formName === "Reset Password" ? null : (
          <>
            <Link className="googleAuth">{props.googleAuth}</Link>
            <img src={Google} alt="" className="googleIcon" />
          </>
        )}
        {props.formName === "Reset Password" ? (
          <BsArrowLeft
            className={`backwardArrow ${
              theme === "dark" ? "dark-theme" : "light-theme"
            }`}
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
