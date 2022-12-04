import React from "react";
import AuthenticationBase from "../reusableComponent/AuthenticationBase";

const Login = () => {
  return (
    <div>
      <AuthenticationBase
        formName="Log in"
        btnName="Log in"
        renderObjectInputs={[
          {
            fieldName: "username",
            type: "text",
            placeholder: "username",
          },
          {
            fieldName: "password",
            type: "password",
            placeholder: "password",
          },
        ]}
        forgot="Forgot password?"
        ques="Don't have an account"
        routeLink="/register"
        routeName="Sign up"
        googleAuth="Login with"
      />
    </div>
  );
};

export default Login;
