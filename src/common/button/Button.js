import React from "react";
import "./Button.css";
function Button({ to, children }) {
  return (
    <a
      href={to}
      className="large-button uppercase ff-serif fs-600 text-dark bg-white"
    >
      {children}
    </a>
  );
}

export default Button;

// props:
// to-> route prop
// children-> button name prop
