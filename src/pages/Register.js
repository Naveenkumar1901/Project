import React from "react";
import AuthenticationBase from "../reusableComponent/AuthenticationBase";
import "../styles/loading.css";

const Register = () => {
  return (
    <>
      <AuthenticationBase
        formName="Sign Up"
        btnName="Sign up"
        renderObjectInputs={[
          {
            fieldName: "userName",
            type: "text",
            placeholder: "User name",
          },
          {
            fieldName: "mobileNumber",
            type: "number",
            placeholder: "Mobile number",
          },
          {
            fieldName: "password",
            type: "password",
            placeholder: "Password",
          },
        ]}
        ques="Already have an account"
        routeLink="/login"
        routeName="Log in"
        googleAuth="Signup with"
      />
    </>
  );
};

export default Register;
