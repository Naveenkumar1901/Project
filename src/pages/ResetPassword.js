import "../styles/authenticationBase.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../config/axiosInstance";
import Logo from "../assets/Logo.png";
import Button from "../reusableComponent/Button";
import Input from "../reusableComponent/Input";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [resetPasswordMobileNumber, setResetPasswordMobileNumber] =
    useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const resetPasswordOperation = async (e) => {
    e.preventDefault();
    if (
      !resetPasswordMobileNumber.length ||
      !newPassword.length ||
      !confirmNewPassword
    )
      return;
    setLoading(true);
    try {
      let data =
        "mobileNumber=" +
        resetPasswordMobileNumber +
        "&otp=" +
        otp +
        "&newPassword=" +
        newPassword +
        "&confirmNewPassword=" +
        confirmNewPassword +
        "&grant_type=password&Type=service";

      await axiosInstance("/resetPassword", {
        method: "PATCH",
        data: data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      navigate("/login");
    } catch (err) {
      setLoading(false);
      setErr(true);
    }
  };
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
          onSubmit={(e) => {
            e.preventDefault();
            resetPasswordOperation();
          }}
        >
          <img src={Logo} alt="" className="logoImage" />
          <div
            className={`baseInnerContainer ${
              theme === "dark" ? "dark-theme" : "light-theme"
            }`}
          >
            <h2 className="formHeading">Reset Password</h2>
            <div className="authenticationFields">
              <Input
                type="text"
                placeholder="Mobile number"
                onChange={(e) => {
                  setResetPasswordMobileNumber(e);
                }}
              />
              <Input
                type="password"
                placeholder="New pasword"
                onChange={(e) => {
                  setNewPassword(e);
                }}
              />
              <Input
                type="password"
                placeholder="Confirm new password"
                onChange={(e) => {
                  setConfirmNewPassword(e);
                }}
              />
            </div>
            <Button variant="primary" onClick={resetPasswordOperation}>
              Continue
            </Button>
            {err && (
              <>
                {newPassword !== confirmNewPassword ? (
                  <span className="errorMessage">Password mismatch!</span>
                ) : resetPasswordMobileNumber.length < 10 ||
                  resetPasswordMobileNumber.length > 10 ? (
                  <span className="errorMessage">
                    Mobile number should be 10 digit!
                  </span>
                ) : newPassword.length < 6 || confirmNewPassword.length < 6 ? (
                  <span className="errorMessage">
                    Password should be 6 character!
                  </span>
                ) : (
                  <span className="errorMessage">Invalid inputs!</span>
                )}
              </>
            )}
            <BsArrowLeft
              className={`backwardArrow ${
                theme === "dark" ? "dark-theme" : "light-theme"
              }`}
              onClick={() => {
                navigate("/login");
              }}
            />
          </div>
        </form>
      )}
    </>
  );
};

export default ResetPassword;
