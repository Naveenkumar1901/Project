import React from "react";
import AuthenticationBase from "../reusableComponent/AuthenticationBase";

const ResetPassword = () => {
  return (
    <div>
      <AuthenticationBase
        formName="Create new password"
        type2="password"
        placeholder2="New password"
        placeholder3="Confirm new password"
        password="Confirm new password"
        btnName="Continue"
      />
    </div>
  );
};

export default ResetPassword;
