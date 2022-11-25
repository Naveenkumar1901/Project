import React from 'react';
import '../styles/authenticationBase.css';

const Input = (props) => {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="reusableInput"
      />
    </>
  );
};

export default Input;
