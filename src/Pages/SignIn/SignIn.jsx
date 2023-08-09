import React from "react";
import "./SignIn.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Google } from "../../assets/svgs/Google.svg";
import { ReactComponent as Apple } from "../../assets/svgs/apple.svg";
import { ReactComponent as Mail } from "../../assets/svgs/mailAt.svg";
import { ReactComponent as Lock } from "../../assets/svgs/lock.svg";
import { ReactComponent as Visible } from "../../assets/svgs/visible.svg";
import Input from "../../Components/Input/Input";
import HeadingWrapper from "../../Components/HeadingWrapper/HeadingWrapper";
import CallToAction from "../../Components/CallToAction/CallToAction";
import Divider from "../../Components/Divider/Divider";
import CheckMark from "../../Components/CheckMark/CheckMark";
import Button from "../../Components/Button/Button";

function SignIn() {
  return (
    <div className="formWrapper">
      <HeadingWrapper
        title="Sign In"
        description="Welcome back, you’ve been missed!"
      />
      <div className="ctaButton">
        <CallToAction
          link="https://www.google.com/"
          icon={<Google />}
          text="Sign Up with Google"
        />
        <CallToAction
          link="https://www.apple.com/"
          icon={<Apple />}
          text="Sign Up with Apple ID"
        />
      </div>

      <Divider />
      <div className="form">
        <Input
          forLabel="email"
          prefix={<Mail />}
          type="email"
          name="email"
          placeholder="Your Email"
          id="email"
          className="primary"
        />
        <Input
          forLabel="password"
          prefix={<Lock />}
          type="password"
          name="password"
          placeholder="Password"
          id="password"
          className="password"
          suffixIcon1={<Visible />}
        />
      </div>

      <div className="auth">
        <CheckMark title="Remember Me" />
        <Link to="/ForgotPwd">
          <span className="pswd">Forgot Password?</span>
        </Link>
      </div>

      <Link to="/HomePage" className="anchor">
        <Button
          title="Sign Up"
          className="btnPrimary signupBtn "
          link={"/HomePage"}
        />
      </Link>

      <div className="redirect">
        Don't have an account yet?
        <Link to="/SignUp" className="anchor">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
