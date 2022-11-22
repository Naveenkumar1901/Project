import React from 'react';
import Base from '../reusableComponent/Base';

const Login = () => {
  return (
    <div>
      <Base
        formName="Log in"
        text="text"
        password="password"
        placeholder="Mobile no"
        placeholder="Password"
        forgot="Forgot password?"
        ques="Don't have an account"
        btnName="Log in"
        routeLink="/register"
        routeName="Sign up"
        googleAuth="Login with"
      />
      />
    </div>
  );
};

export default Login;
