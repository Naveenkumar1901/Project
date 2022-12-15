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
import { useEffect } from "react";
import axiosInstance from "../config/axiosInstance";

const AuthenticationBase = (props) => {
  const navigate = useNavigate();

  // const [commonState, setCommonState] = useState({});

  // const home = () => {
  //   props.formName !== "Reset Password" &&
  //     localStorage.setItem("userInfo", JSON.stringify(commonState));
  //   navigate("/home");
  // };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) navigate("/home");
  }, [navigate]);
  const [loginMobileNumber, setLoginMobileNumber] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const loginOperation = async (e) => {
    console.log("click");
    e.preventDefault();
    console.log(loginMobileNumber, loginPassword);
    if (!loginMobileNumber.length || !loginPassword.length) return;
    setLoading(true);
    try {
      const response = await axiosInstance.post("/login", {
        userName: loginMobileNumber,
        password: loginPassword,
        grant_type: "password",
        Type: "service",
      });
      localStorage.setItem("userInfo", JSON.stringify(response.data.user));
      navigate("/home");
    } catch (err) {
      setLoading(false);
      setErr(true);
    }
  };

  // const setCommonStateFunc = (value, fieldName) => {
  //   setLoginMobileNumber((prevState) => ({ ...prevState, [fieldName]: value }));
  //   setLoginPassword((prevState) => ({ ...prevState, [fieldName]: value }));
  // };

  const theme = useSelector((state) => state.color.theme);

  return (
    <>
      {loading ? (
        <loading />
      ) : (
        <form
          className={`baseContainer ${
            theme === "dark" ? "dark-theme" : "light-theme"
          }`}
        >
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
                  onChange={(e) => {
                    if (value.placeholder === "Password") {
                      setLoginPassword(e);
                    } else setLoginMobileNumber(e);
                  }}
                />
              </div>
            ))}

            <Link className="forgotLink" to="/resetPassword">
              {props.forgot}
            </Link>
            <Button variant="primary" onClick={loginOperation}>
              {props.btnName}
            </Button>
            {err && <span className="errorMsg">Invalid Credentials!</span>}
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
        </form>
      )}
    </>
  );
};

export default AuthenticationBase;
