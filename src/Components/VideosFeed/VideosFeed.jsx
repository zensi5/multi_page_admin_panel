import React from "react";
import "./VideosFeed.scss";
import PostCard from "../PostCard/PostCard";
import { ReactComponent as UpArrow } from "../../assets/svgs/arrowup.svg";
import { ReactComponent as Like } from "../../assets/svgs/like.svg";
import { Images } from "../../assets/images/images";
import ProfileImage from "../ProfileImage/ProfileImage";
import Button from "../Button/Button";

const VideosFeed = () => {
  const watchlist = [
    {
      title: "Latest Videos",
      icon: (
        <button className="onPlay">
          <div className="playBtn"></div>
        </button>
      ),
    },
    {
      title: "Bogdan Krivenchenko",
      description: "5 New Videos",
      icon: (
        <ProfileImage
          src={Images.Profile4}
          alt="profile"
          showBadge={false}
          width="42px"
          height="42px"
        />
      ),
    },
    {
      title: "Julia Rokina",
      description: "8 New Videos",
      icon: (
        <ProfileImage
          src={Images.Profile7}
          alt="profile"
          showBadge={false}
          width="42px"
          height="42px"
        />
      ),
    },
    {
      title: "Sergei Filatov",
      description: "10+ New Videos",
      icon: (
        <ProfileImage
          src={Images.Profile2}
          alt="profile"
          showBadge={false}
          width="42px"
          height="42px"
        />
      ),
    },
    {
      title: "Daiel Falka",
      description: "4 New Videos",
      icon: (
        <ProfileImage
          src={Images.Profile5}
          alt="profile"
          showBadge={false}
          width="42px"
          height="42px"
        />
      ),
    },
    {
      title: "Alpamys Moldashev",
      description: "2 New Videos",
      icon: (
        <ProfileImage
          src={Images.Profile7}
          alt="profile"
          showBadge={false}
          width="42px"
          height="42px"
        />
      ),
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-flex wrapper videoWrapper">
          <div className="col-7 col-xl-12 d-flex">
            <div className="post">
              <PostCard
                profile={Images.Shortcut1}
                action="+ Follow"
                postName="Unisense Digital Agency"
                timeAgo="14"
                title="Boxboard Dashboard Ui Kit"
                details="Boxboard is a simple and beautiful admin template with tons of flexible components, every one designed to be harmonious and be combined into beautiful applications."
                thumbnail={Images.VideoThumb2}
                duration="03:32"
                likes="103"
                comment="67"
                share="105"
              />
            </div>
            <div className="post">
              <PostCard
                profile={Images.Profile1}
                action={
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "3px",
                    }}
                  >
                    <UpArrow />
                    <span>Boost</span>
                  </div>
                }
                postName="Artem Kyznetsov"
                timeAgo="16"
                title="Createpull Character Illustrations"
                details="Createpull is a high-quality character illustration builder based on editable components. Mix and match clothes and hairstyles in order to add flavor, change the background..."
                thumbnail={Images.VideoThumb1}
                duration="02:34"
                likes="103"
                comment="67"
                share="105"
              />
            </div>
          </div>

          <div className="col-5 col-xl-12">
            <div className="cardBody">
              <div className="cardTitle">
                <h3>Your Watchlist</h3>
                <p>Manage</p>
              </div>
              <div className="stroke" />
              <ul>
                {watchlist.map((item, index) => (
                  <React.Fragment>
                    <li key={index} className="list">
                      {item.icon}
                      <div className="listItem">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </div>
            <div className="cardBody">
              <div className="cardTitle">
                <h3>Suggested Pages</h3>
                <p>See All</p>
              </div>
              <div className="stroke" />
              <div className="list">
                <div className="logo">
                  <img src={Images.Shortcut2} alt="profile" />
                </div>
                <div className="listItem">
                  <h4>DesignStack</h4>
                  <p>Design Community</p>
                </div>
              </div>
              <div className="mockup">
                <img src={Images.Mockup} alt="mockup" />
              </div>
              <Button title="Like Page" icon={<Like />} className="likeBtn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosFeed;
