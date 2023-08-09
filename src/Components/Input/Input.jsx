import React from "react";
import "./Input.scss";

function Input({
  forLabel,
  prefix,
  type,
  name,
  placeholder,
  className,
  id,
  errormsg,
  suffixIcon1,
  suffixIcon2,
}) {
  return (
    <form className="fields">
      <label forname={forLabel} className="label">
        {prefix}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
        id={id}
      />
      <span>{errormsg}</span>
      <div className="suffixWrapper">
        {suffixIcon1 && <label className="suffixIcon">{suffixIcon1}</label>}
        {suffixIcon2 && <label className="suffixIcon">{suffixIcon2}</label>}
      </div>
    </form>
  );
}

export default Input;
