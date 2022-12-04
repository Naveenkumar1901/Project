import React from "react";
import AuthenticationBase from "../reusableComponent/AuthenticationBase";

const ResetPassword = () => {
  return (
    <div>
      <AuthenticationBase
        formName="Create new password"
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
    </div>
  );
};

export default ResetPassword;
