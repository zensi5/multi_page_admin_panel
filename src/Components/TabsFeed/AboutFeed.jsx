import React from "react";
import "./AboutFeed.scss";
import { Images } from "../../assets/images/images";
import { ReactComponent as Plus } from "../../assets/svgs/plus.svg";
import { ReactComponent as Video } from "../../assets/svgs/video.svg";
import { ReactComponent as Picture } from "../../assets/svgs/picture.svg";
import { ReactComponent as Smile } from "../../assets/svgs/smile.svg";
import { ReactComponent as Unlock } from "../../assets/svgs/unlock.svg";
import { ReactComponent as Visible } from "../../assets/svgs/visible.svg";
import { ReactComponent as Location } from "../../assets/svgs/location.svg";
import { ReactComponent as Shield } from "../../assets/svgs/shield.svg";
import { ReactComponent as Clipboard } from "../../assets/svgs/eventboard.svg";
import ProfileImage from "../ProfileImage/ProfileImage";
import Button from "../Button/Button";
import MoreOption from "../MoreOption/MoreOption";
import PostCard from "../PostCard/PostCard";
import TabsComponent from "../TabComponent/TabComponent";
function LoginForm() {
  return (
    <div className="d-flex">
      <div className="col-7 col-xl-12 d-flex">
        <div className="createPost">
          <div className="postDetails">
            <ProfileImage
              src={Images.Profile1}
              alt="profile"
              showBadge={false}
              width="32px"
              height="32px"
            />

            <input
              type="text"
              name="post"
              placeholder="What's new with you?"
              className="postInput"
            />
          </div>
          <div className="stroke" />
          <ul className="postActions">
            <li>
              <Video />
              <p>Live Video</p>
            </li>
            <hr />
            <li>
              <Picture />
              <p>Image/Video</p>
            </li>
            <hr />
            <li>
              <Smile />
              <p>Feeling/Activity</p>
            </li>
          </ul>
        </div>
        <div className="post">
          <PostCard
            profile={Images.Shortcut1}
            postName="Unisense Digital Agency"
            timeAgo="27"
            details="Boxboard is a simple and beautiful admin template with tons of flexible components."
            thumbnail={Images.VideoThumb2}
            duration="03:32"
            likes="103"
            comment="67"
            share="105"
            commentBar={true}
          />
        </div>
        <div className="post">
          <PostCard
            profile={Images.Shortcut1}
            postName="Unisense Digital Agency"
            timeAgo="27"
            details="Createpull is a high-quality character illustration builder based on editable components."
            thumbnail={Images.VideoThumb1}
            duration="02:24"
            likes="103"
            comment="67"
            share="105"
            commentBar={true}
          />
        </div>
      </div>
      <div className="col-5 col-xl-12">
        <div className="cardBody">
          <div className="cardHeader">
            <div className="cardTitle">
              <h3>About</h3>
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
          <ul className="cardContent">
            <li>
              <div className="icon">
                <Unlock width="38px" height="38px" />
              </div>
              <div className="cardData">
                <h3>Open Group</h3>
                <p>
                  People are free to join your community and see your posts.
                </p>
              </div>
            </li>
            <li>
              <div className="icon">
                <Visible width="38px" height="38px" />
              </div>
              <div className="cardData">
                <h3>Visible</h3>
                <p>Your community is visible to search..</p>
              </div>
            </li>
            <li>
              <div className="icon">
                <Location width="38px" height="38px" />
              </div>
              <div className="cardData">
                <h3>Yoshkar-Ola, Russia</h3>
                <p>The place where the community is based.</p>
              </div>
            </li>
            <li>
              <div className="icon">
                <Shield width="38px" height="38px" />
              </div>
              <div className="cardData">
                <h3>Verified Community</h3>
                <p>
                  This community is the official representative of the company
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* event card */}
        <div className="cardBody">
          <div className="cardTitle">
            <h3>Events</h3>
            <span>
              <MoreOption />
            </span>
          </div>
          <div className="stroke" />
          <div className="cardTile">
            <div className="cardIcon">
              <Clipboard />
            </div>
            <div className="tileData">
              <h5>Boxboard Opening</h5>
              <p>Today, At 10 Pm</p>
            </div>
          </div>
          <div className="cardTile">
            <div className="cardIcon">
              <Clipboard />
            </div>
            <div className="tileData">
              <h5>Cretepull Opening</h5>
              <p>Friday 19-20, March</p>
            </div>
          </div>
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
