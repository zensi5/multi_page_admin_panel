import React from "react";
import { Images } from "../../assets/images/images";
import { ReactComponent as Clipboard } from "../../assets/svgs/eventboard.svg";
import MoreOption from "../MoreOption/MoreOption";
import "./AboutFeed.scss";
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
