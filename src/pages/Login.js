import React from "react";
import AuthenticateBase from "../reusableComponent/AuthenticateBase";

const Login = () => {
  return (
    <div>
      <AuthenticateBase
        formName="Log in"
        text="text"
        password="password"
        placeholder="Mobile no"
        forgot="Forgot password?"
        ques="Don't have an account"
        btnName="Log in"
        routeLink="/register"
        routeName="Sign up"
        googleAuth="Login with"
      />
    </div>
  );
};

export default Login;
