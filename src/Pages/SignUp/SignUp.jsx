import React from "react";
import "./SignUp.scss";
//import SignIn from '../SignIn/SignIn'
import { ReactComponent as Google } from "../../assets/svgs/Google.svg";
import { ReactComponent as Apple } from "../../assets/svgs/apple.svg";
import { ReactComponent as Mail } from "../../assets/svgs/mailAt.svg";
import { ReactComponent as Smile } from "../../assets/svgs/smile.svg";
import { ReactComponent as Lock } from "../../assets/svgs/lock.svg";
import { ReactComponent as Visible } from "../../assets/svgs/visible.svg";
import { Link } from "react-router-dom";
import Background from "../../Components/background/Background";
import Input from "../../Components/Input/Input";
import HeadingWrapper from "../../Components/HeadingWrapper/HeadingWrapper";
import CallToAction from "../../Components/CallToAction/CallToAction";
import Divider from "../../Components/Divider/Divider";
import CheckMark from "../../Components/CheckMark/CheckMark";
import Button from "../../Components/Button/Button";

function SignUp() {
    return (
        <div className="formWrapper">
            <HeadingWrapper
                title="Getting Started"
                description="Create an account to continue!"
                className="title"
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
                <div className="danger">
                    <Input
                        forLabel="email"
                        prefix={<Mail />}
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        id="email"
                        className="danger"
                    />
                </div>
                <Input
                    forLabel="name"
                    prefix={<Smile />}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    id="name"
                    className="name"
                />
                <Input
                    forLabel="password"
                    prefix={<Lock />}
                    type="password"
                    name="password"
                    placeholder="Create Password"
                    id="password"
                    suffixIcon1={<Visible />}
                />
            </div>

            <CheckMark
                title="I agree to the Terms & Conditions"
                className="checkMark"
            />

            <Link to="/HomePage" className="anchor">
                <Button
                    title="Sign Up"
                    className="btnPrimary signupBtn "
                    link={"/HomePage"}
                />
            </Link>

            <div className="redirect">
                Already have an account?
                <Link to="/SignIn" className="anchor">
                    <span>Sign In</span>
                </Link>
            </div>
        </div>
    );
}

export default SignUp;
