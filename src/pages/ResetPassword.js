import React from 'react';
import Base from '../reusableComponent/Base';

const ResetPassword = () => {
  return (
    <div>
      <Base
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
