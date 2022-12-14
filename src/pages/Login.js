import React from "react";
import AuthenticationBase from "../reusableComponent/AuthenticationBase";

const Login = () => {
  return (
    <>
      <AuthenticationBase
        formName="Log In"
        btnName="Log in"
        renderObjectInputs={[
          {
            fieldName: "mobileNumber",
            type: "text",
            placeholder: "Mobile number",
          },
          {
            fieldName: "password",
            type: "password",
            placeholder: "Password",
          },
        ]}
        forgot="Forgot password?"
        ques="Don't have an account"
        routeLink="/register"
        routeName="Sign up"
        googleAuth="Login with"
      />
    </>
  );
};

export default Login;
