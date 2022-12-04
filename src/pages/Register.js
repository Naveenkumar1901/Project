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
        btnName="Sign up"
        renderObjectInputs={[
          {
            fieldName: "username",
            type: "text",
            placeholder: "username",
          },
          {
            fieldName: "Mobile number",
            type: "number",
            placeholder: "Mobile number",
          },
          {
            fieldName: "password",
            type: "password",
            placeholder: "password",
          },
        ]}
        //later
        ques="Already have an account"
        routeLink="/login"
        routeName="Log in"
        googleAuth="Signup with"
      />
    </div>
  );
};

export default Register;
