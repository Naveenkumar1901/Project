import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationBase from "../reusableComponent/AuthenticationBase";
import "../styles/loading.css";
const Register = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  return (
    <div className="register-container">
      <AuthenticationBase
        formName="Sign up"
        type1="text"
        type2="password"
        placeholder2="Mobile no"
        placeholder3="Password"
        placeholder1="Username"
        ques="Already have an account"
        btnName="Sign up"
        routeLink="/login"
        routeName="Log in"
        googleAuth="Signup with"
      />
    </div>
  );
};

export default Register;
