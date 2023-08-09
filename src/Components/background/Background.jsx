import { React, useState } from "react";
import "./Background.scss";
import { ReactComponent as DownArrow } from "../../assets/svgs/downArrow.svg";
import { Images } from "../../assets/images/images";
import CustomSelect from "../CustomSelect/CustomSelect";

function Background() {
  const language = [
    { label: "English (UK)", value: "option1" },
    { label: "Chinese", value: "option2" },
    { label: "German", value: "option3" },
  ];
  return (
    <>
      <div className="header">
        <img src={Images.Logo} alt="Logo" className="icon" />
        <CustomSelect selectOption={language} defaultOption="English(UK)" />
      </div>
      <div className="background">
        <div className="leftBg"></div>
      </div>
    </>
  );
}

export default Background;
