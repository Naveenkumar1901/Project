import "../styles/button.css";
import React from "react";
function Button({ children, onClick, variant }) {
  return (
    <button className={`commonButtonStyle ${variant || ""}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
