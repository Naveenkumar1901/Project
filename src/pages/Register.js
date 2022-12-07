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
        ques="Already have an account"
        routeLink="/login"
        routeName="Log in"
        googleAuth="Signup with"
      />
    </>
  );
};

export default Register;
