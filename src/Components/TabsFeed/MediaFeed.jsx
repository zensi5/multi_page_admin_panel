import React from "react";
import { Images } from "../../assets/images/images";
import MoreOption from "../MoreOption/MoreOption";
import PostCard from "../PostCard/PostCard";
import "./AboutFeed.scss";
function LoginForm() {
  return (
    <div className="d-flex">
      <div className="col-6 col-xl-12 d-flex">
        <div className="post">
          <PostCard
            profile={Images.Shortcut1}
            postName="Unisense Digital Agency"
            timeAgo="27"
            img={Images.Media1}
            commentBar={false}
            likes="103"
            comment="67"
            share="105"
          />
        </div>
        <div className="post">
          <PostCard
            profile={Images.Shortcut1}
            postName="Unisense Digital Agency"
            timeAgo="27"
            img={Images.Media2}
            commentBar={false}
            likes="103"
            comment="67"
            share="105"
          />
        </div>
      </div>
      <div className="col-6 col-xl-12">
        <div className="cardBody">
          <div className="cardHeader">
            <div className="cardTitle">
              <h3>Media</h3>
              <span>
                <MoreOption />{" "}
              </span>
            </div>
            <p>
              We are a team of specialists who create high-quality, simple and
              useful products in the field of web design, branding and UI / UX
              design.
            </p>
          </div>
          <div className="stroke" />
        </div>
        {/* media card */}

        <div className="cardBody">
          <div className="cardTitle">
            <h3>Recent Media</h3>
            <span>
              <MoreOption />
            </span>
          </div>
          <div className="stroke" />
          <div className="cardMedia">
            <div className="media">
              <img src={Images.Media1} alt="media1" className="image" />
              <img src={Images.Media2} alt="media2" className="image" />
            </div>
            <div className="media">
              <img src={Images.Media3} alt="media3" className="image" />
              <img src={Images.Media4} alt="media4" className="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
