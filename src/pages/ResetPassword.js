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
            fieldName: "username",
            type: "password",
            placeholder: "new password",
          },
          {
            fieldName: "Mobile number",
            type: "password",
            placeholder: "confirm new password",
          },
        ]}
      />
    </>
  );
};

export default ResetPassword;
