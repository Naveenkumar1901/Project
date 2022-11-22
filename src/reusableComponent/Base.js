import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import '../styles/loading.css';
import Google from '../assets/google-icon.png';
import '../styles/base.css';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import Input from './Input';
const Base = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const home = () => {
    navigate('/');
  };

  return (
    <div className="base-container">
      <loading />
      <img src={Logo} alt="" className="logo-image" />
      <div className="base-innerContainer">
        <h2 className="form-heading">{props.formName}</h2>
        {props.formName === 'Sign up' ? (
          <Input type={props.type.text} placeholder={props.placholder.mobile} />
        ) : null}
        <Input type={props.type.text} placeholder={props.placholder.mobile} />
        {/* <div className="eye-icon"> */}
        <Input
          type={props.type.password}
          placeholder={props.placholder.password}
        />
        {/* <BsEyeSlashFill className="eyeIcon-closed" /> */}
        {/* <BsEyeFill className="eyeIcon-opened" /> */}
        {/* </div> */}
        <Link className="forgot-link" to="/resetPassword">
          {props.forgot}
        </Link>
        <button className="btn" onClick={home}>
          {props.btnName}
        </button>
        <span className="ques">
          {props.ques}
          <Link className="route-link" to={props.routeLink}>
            {props.routeName}
          </Link>
        </span>
        {props.formName === 'Create new password' ? null : (
          <div className="or-section">
            <hr className="line1" />
            <p className="or-text">OR</p>
            <hr className="line2" />
          </div>
        )}
        {props.formName === 'Create new password' ? null : (
          <>
            <Link className="google-auth">{props.googleAuth}</Link>
            <img src={Google} alt="" className="google-icon" />
          </>
        )}
      </div>
    </div>
  );
};

export default Base;
