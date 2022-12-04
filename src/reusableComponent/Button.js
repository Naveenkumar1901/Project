import React from "react";
import "../styles/button.css";
function Button({ children, onClick, variant }) {
  return (
    <button className={`commonButtonStyle ${variant || ""}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
