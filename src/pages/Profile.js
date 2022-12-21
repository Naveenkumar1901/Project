import React from "react";
import { GiSmartphone } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import ThemeSwitch from "../components/Switch";
import { changeTheme } from "../redux/slices/themeSlice";
import "../styles/profile.css";
const Profile = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.color.theme);
  const userInfo = useSelector((state) => state.user.userInfo);
  return (
    <div className="profileContainer">
      <div className="userInfo">
        <div className="profileAvatar">
          <div className="profilePicture">{userInfo.UserName?.at(0)}</div>
        </div>
        <p className="userName">{userInfo.UserName}</p>
      </div>
      <div className="mobileNumberSection">
        <div className="mobileIcon">
          <GiSmartphone />
        </div>
        <p className="mobileNumber">{userInfo.PhoneNumber}</p>
      </div>
      <div className="switchTheme">
        <div className="switchBtn">
          <ThemeSwitch
            onClick={() => {
              dispatch(changeTheme());
            }}
            checked={theme === "light" ? false : true}
          />
        </div>
        <p className="themeText">Switch theme</p>
      </div>
    </div>
  );
};

export default Profile;
