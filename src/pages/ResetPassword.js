import React from "react";
import AuthenticationBase from "../reusableComponent/AuthenticationBase";

const ResetPassword = () => {
  return (
    <>
      <AuthenticationBase
        formName="Reset Password"
        btnName="Continue"
        renderObjectInputs={[
          {
            fieldName: "newPassword",
            type: "password",
            placeholder: "New password",
          },
          {
            fieldName: "confirmNewPassword",
            type: "password",
            placeholder: "Confirm new password",
          },
        ]}
      />
    </>
  );
};

export default ResetPassword;
