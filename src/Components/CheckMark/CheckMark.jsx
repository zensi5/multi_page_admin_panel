import React from "react";
import "./CheckMark.scss";

function CheckMark({ title, className }) {
  return (
    <div className={`checkWrapper ${className}`}>
      <input type="checkbox" name="check" id="check" />
      <label forname="check" className="title">
        {title}
      </label>
    </div>
  );
}

export default CheckMark;
