import "../styles/authenticationBase.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Google from "../assets/google-icon.png";
import Logo from "../assets/Logo.png";
import Input from "../reusableComponent/Input";
import Button from "../reusableComponent/Button";
import axiosInstance from "../config/axiosInstance";

  const Login = () => {
    const navigate = useNavigate();
    const [loginMobileNumber, setLoginMobileNumber] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);

    useEffect(() => {
      let user = JSON.parse(localStorage.getItem("currentUser"));
      if (user) navigate("/home");
    }, [navigate]);

    const loginOperation = async (e) => {
      e.preventDefault();
      if (!loginMobileNumber.length || !loginPassword.length) return;
      setLoading(true);
      try {
        let data =
          "userName=" +
          loginMobileNumber +
          "&password=" +
          loginPassword +
          "&grant_type=password&Type=service";

        const response = await axiosInstance("/login", {
          method: "POST",
          data: data,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        localStorage.setItem("currentUser", JSON.stringify(response.data));
        navigate("/home");
      } catch (err) {
        setLoading(false);
        setErr(true);
      }
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
              loginOperation();
            }}
          >
            <img src={Logo} alt="" className="logoImage" />
            <div
              className={`baseInnerContainer ${
                theme === "dark" ? "dark-theme" : "light-theme"
              }`}
            >
              <h2 className="formHeading">Log In</h2>

              <div className="authenticationFields">
                <Input
                  type="text"
                  placeholder="Mobile number"
                  maxLength="10"
                  minLength="10"
                  onChange={(e) => {
                    setLoginMobileNumber(e);
                  }}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  minLength="6"
                  onChange={(e) => {
                    setLoginPassword(e);
                  }}
                />
              </div>
              <Link className="forgotLink" to="/resetPassword">
                Forgot password?
              </Link>
              <Button variant="primary" onClick={loginOperation}>
                Log In
              </Button>
              {err && (
                <>
                  {loginMobileNumber.length < 10 ||
                  loginMobileNumber.length > 10 ? (
                    <span className="errorMessage">Invalid mobile number!</span>
                  ) : loginPassword.length < 6 ? (
                    <span className="errorMessage">Invalid password!</span>
                  ) : (
                    <span className="errorMessage">
                      Not an authorized user!
                    </span>
                  )}
                </>
              )}
              <span className="question">
                Dont't have an account?
                <Link className="routeLink" to={"/register"}>
                  Sign up
                </Link>
              </span>
              <div className="orSection">
                <hr className="line1" />
                <p className="orText">OR</p>
                <hr className="line2" />
              </div>
              <Link className="googleAuth">Login with</Link>
              <img src={Google} alt="" className="googleIcon" />
            </div>
          </form>
        )}
      </>
    );
  };

export default Login;
