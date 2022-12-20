import "../styles/authenticationBase.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Google from "../assets/google-icon.png";
import Logo from "../assets/Logo.png";
import Input from "../reusableComponent/Input";
import Button from "../reusableComponent/Button";
import { signUpUser } from "../redux/slices/authSlice";

const Register = () => {
  const navigate = useNavigate();
  const [signupUserName, setSignupUserName] = useState("");
  const [signupMobileNumber, setSignupMobileNumber] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const dispatch = useDispatch();
  const signupOperation = async (e) => {
    e.preventDefault();
    if (!signupUserName.length || !signupMobileNumber.length || !signupPassword)
      return;
    setLoading(true);
    let body =
      "phNum=" +
      signupMobileNumber +
      "&name=" +
      signupUserName +
      "&password=" +
      signupPassword +
      "&type=service";

    dispatch(signUpUser(body));

    navigate("/login");
    setLoading(false);
    setErr(true);
  };
  const theme = useSelector((state) => state.color.theme);

  return (
    <>
      {loading ? (
        <loading />
      ) : (
        <form
          className={`baseContainer ${
            theme === "dark" ? "dark-theme" : "light-theme"
          }`}
          onSubmit={(e) => {
            e.preventDefault();
            signupOperation();
          }}
        >
          <img src={Logo} alt="" className="logoImage" />
          <div
            className={`baseInnerContainer ${
              theme === "dark" ? "dark-theme" : "light-theme"
            }`}
          >
            <h2 className="formHeading">Sign up</h2>

            <div className="authenticationFields">
              <Input
                placeholder="User name"
                type="text"
                minLength="4"
                min="4"
                onChange={(e) => {
                  setSignupUserName(e);
                }}
              />
              <Input
                placeholder="Mobile number"
                type="text"
                minLength="10"
                maxLength="10"
                onChange={(e) => {
                  setSignupMobileNumber(e);
                }}
              />
              <Input
                type="password"
                placeholder="Password"
                minLength="6"
                onChange={(e) => {
                  setSignupPassword(e);
                }}
              />
            </div>
            <Button variant="primary" onClick={signupOperation}>
              Sign up
            </Button>
            {err && (
              <>
                {signupUserName.length < 4 ? (
                  <span className="errorMessage">
                    User name should be 4 characters atleast!
                  </span>
                ) : signupMobileNumber.length < 10 ||
                  signupMobileNumber.length > 10 ? (
                  <span className="errorMessage">
                    Mobile number should be 10 digit!
                  </span>
                ) : signupPassword.length < 6 ? (
                  <span className="errorMessage">
                    Password should be 6 characters atleast!
                  </span>
                ) : null}
              </>
            )}
            <span className="question">
              Dont't have an account?
              <Link className="routeLink" to={"/login"}>
                Log In
              </Link>
            </span>
            <div className="orSection">
              <hr className="line1" />
              <p className="orText">OR</p>
              <hr className="line2" />
            </div>

            <Link className="googleAuth">Signup with</Link>
            <img src={Google} alt="" className="googleIcon" />
          </div>
        </form>
      )}
    </>
  );
};

export default Register;
