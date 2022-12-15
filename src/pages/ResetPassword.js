import "../styles/authenticationBase.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Button from "../reusableComponent/Button";
import Input from "../reusableComponent/Input";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
            <h2 className="formHeading">Sign up</h2>
            <div className="authenticationFields">
              <Input
                type="password"
                placeholder="New pasword"
                onChange={(e) => {}}
              />
              <Input
                type="password"
                placeholder="Confirm new password"
                onChange={(e) => {}}
              />
            </div>
            <Button variant="primary">Continue</Button>
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
