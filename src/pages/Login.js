import React from "react";
import AuthenticationBase from "../reusableComponent/AuthenticationBase";

const Login = () => {
  return (
    <div>
      <AuthenticationBase
        formName="Log in"
        type1="text"
        type2="password"
        placeholder2="Mobile no"
        placeholder3="Password"
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
