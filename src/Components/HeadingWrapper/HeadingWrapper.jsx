import React from "react";
import "./HeadingWrapper.scss";

function HeadingWrapper({ title, description }) {
  return (
    <>
      <h2 className="heading">{title}</h2>
      <h3 className="subHeading">{description}</h3>
    </>
  );
}

export default HeadingWrapper;
