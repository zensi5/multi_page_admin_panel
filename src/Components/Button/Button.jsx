import React from "react";
import "./Button.scss";
function Button({ title, icon, className }) {
  return (
    <button className={className}>
      <div className="icon">{icon}</div>
      <p className="title">{title}</p>
    </button>
  );
}

export default Button;
