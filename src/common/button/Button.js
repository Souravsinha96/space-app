import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
function Button({ to, children }) {
  return (
    <Link
      to={to}
      className="large-button uppercase ff-serif fs-600 text-dark bg-white"
    >
      {children}
    </Link>
  );
}

export default Button;

// props:
// to-> route prop
// children-> button name prop
