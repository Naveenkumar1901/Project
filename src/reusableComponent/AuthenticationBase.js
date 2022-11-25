import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "../styles/loading.css";
import Google from "../assets/google-icon.png";
import "../styles/authenticationBase.css";
import { BsArrowLeft, BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import Input from "./Input";
const AuthenticationBase = (props) => {
const navigate = useNavigate();
const [showPassword, setShowPassword] = useState("password");
const [iconE, setIconE] = useState(<BsEyeSlashFill/>)
const [loading, setLoading] = useState(true);
const home = () => {
    navigate("/");
 };
const handleIcon =()=>{
if(showPassword === "password")  
{
  setShowPassword("text")
  setIconE(<BsEyeFill/>)
}
else {
  setShowPassword("password")
  setIconE(<BsEyeSlashFill/>)
}
}

  return (
    <div className="base-container">
      <loading />
      <img src={Logo} alt="" className="logo-image" />
      <div className="base-innerContainer">
        <h2 className="form-heading">{props.formName}</h2>
        {props.formName === "Sign up" ? (
          <Input type={props.type1} placeholder={props.placeholder1} />
        ) : null}
        <Input type={props.type1} placeholder={props.placeholder2} />
        <div className="eye-icon">
        <Input type={showPassword} placeholder={props.placeholder3} />
        {iconE && iconE ? <BsEyeSlashFill className="eyeIcon-closed" onClick={handleIcon}/> :  <BsEyeFill className="eyeIcon-opened" /> }
      
        </div>
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
        {props.formName === "Create new password" ? null : (
          <div className="or-section">
            <hr className="line1" />
            <p className="or-text">OR</p>
            <hr className="line2" />
          </div>
        )}
        {props.formName === "Create new password" ? null : (
          <>
            <Link className="google-auth">{props.googleAuth}</Link>
            <img src={Google} alt="" className="google-icon" />
          </>
        )}
        {props.formName === "Create new password" ? <BsArrowLeft className="backwardArrow" onClick={()=>{navigate("/login")}}/> : null} 
      </div>
    </div>
  );
};

export default AuthenticationBase;
