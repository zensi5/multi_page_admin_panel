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
      <div className="col-6 col-xl-12 d-flex">
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
        <div className="cardBody">
          <div className="cardTitle">
            <h3>Martio Music Event I Biggest Music Festival</h3>
          </div>
          <div className="cardMedia">
            <div className="media">
              <img src={Images.Media1} alt="media1" className="image" />
              <img src={Images.Media2} alt="media2" className="image" />
            </div>
          </div>
        </div>
        <div className="cardBody">
          <div className="cardTitle">
            <h3>Martio Music Event I Biggest Music Festival</h3>
          </div>
          <div className="cardMedia">
            <div className="media">
              <img src={Images.Media3} alt="media3" className="image" />
              <img src={Images.Media4} alt="media4" className="image" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 col-xl-12">
        <div className="cardBody">
          <div className="cardTitle">
            <h3>Martio Music Event I Biggest Music Festival</h3>
          </div>
          <div className="cardMedia">
            <div className="media">
              <img src={Images.Media3} alt="media3" className="image" />
              <img src={Images.Media4} alt="media4" className="image" />
            </div>
          </div>
        </div>
        <div className="cardBody">
          <div className="cardTitle">
            <h3>Martio Music Event I Biggest Music Festival</h3>
          </div>
          <div className="cardMedia">
            <div className="media">
              <img src={Images.Media1} alt="media1" className="image" />
              <img src={Images.Media2} alt="media2" className="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
