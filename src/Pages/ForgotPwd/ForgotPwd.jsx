import React from "react";
import "./ForgotPwd.scss";
import HeadingWrapper from "../../Components/HeadingWrapper/HeadingWrapper";
import { Link } from "react-router-dom";
import { ReactComponent as Mail } from "../../assets/svgs/mailAt.svg";
import { ReactComponent as LeftArrow } from "../../assets/svgs/leftArrow.svg";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";

function ForgotPwd() {
  return (
    <div className="formWrapper forgotWrapper">
      <HeadingWrapper
        title="Forgot password?"
        description="Enter your details to recieve a reset link"
      />

      <div className="form">
        <Input
          forLabel="email"
          prefix={<Mail />}
          type="email"
          name="email"
          placeholder="hello@unisense.agency"
          id="email"
          className="success"
        />
      </div>

      <Link to="/HomePage" className="anchor">
        <Button
          title="Sign Up"
          className="btnPrimary signupBtn "
          link={"/HomePage"}
        />
      </Link>

      <Link to="/SignIn" className="redirect">
        <LeftArrow />
        <span>Back to Sign In</span>
      </Link>
    </div>
  );
}

export default ForgotPwd;
