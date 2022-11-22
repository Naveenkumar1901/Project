import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Base from '../reusableComponent/Base';
import '../styles/loading.css';
const Register = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate('/');
  };
  return (
    <div className="register-container">
      <Base
        formName="Sign up"
        textType="text"
        passwordType="password"
        mobileno="Mobile no"
        password="Password"
        username="Username"
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
