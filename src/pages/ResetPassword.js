import React from "react";
import AuthenticateBase from "../reusableComponent/AuthenticateBase";

const ResetPassword = () => {
  return (
    <div>
      <AuthenticateBase
        formName="Create new password"
        textType="password"
        passwordType="password"
        mobileno="New password"
        password="Confirm new password"
        btnName="Continue"
      />
    </div>
  );
};

export default ResetPassword;
