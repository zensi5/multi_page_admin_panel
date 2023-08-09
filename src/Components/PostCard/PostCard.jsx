import React, { useState } from "react";
import "./PostCard.scss";
import ProfileImage from "../ProfileImage/ProfileImage";
import MoreOption from "../MoreOption/MoreOption";
import { ReactComponent as Heart } from "../../assets/svgs/heart.svg";
import { ReactComponent as Chat } from "../../assets/svgs/chat.svg";
import { ReactComponent as Reply } from "../../assets/svgs/reply.svg";
import { ReactComponent as Clip } from "../../assets/svgs/clip.svg";
import { ReactComponent as Smile } from "../../assets/svgs/smile.svg";
import { Images } from "../../assets/images/images";
import Input from "../Input/Input";

const PostCard = ({
  profile,
  postName,
  timeAgo,
  title,
  img,
  details,
  thumbnail,
  duration,
  likes,
  comment,
  share,
  action,
  commentBar,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  return (
    <div className="postWrapper">
      <div className="postTitle">
        <div className="profile">
          <ProfileImage
            src={profile}
            alt="profile"
            showBadge={false}
            width="42px"
            height="42px"
          />
          <div>
            <h3> {postName}</h3>
            <p> {timeAgo} mins ago </p>
          </div>
        </div>

        <div className="setting">
          <span> {action}</span>
          <MoreOption />
        </div>
      </div>

      <div className="postVideo">
        <div className="detailBox">
          <h3 className="title">{title}</h3>
          <p className="details">{details}</p>
        </div>
        {thumbnail && (
          <div className="video">
            {isPlaying ? (
              <video width="100%" height="100%" controls autoPlay>
                <source src={Images.Video} type="video/mp4" />
              </video>
            ) : (
              <div className="imgWrapper">
                <img src={thumbnail} alt="thumbnail" />
                <div className="controler">
                  <button className="onPlay" onClick={handlePlayClick}>
                    <div className="playBtn"></div>
                  </button>
                  <div className="duration">{duration}</div>
                </div>
              </div>
            )}
          </div>
        )}

        {img && (
          <div className="justify-center">
            <img src={img} alt="card" />
          </div>
        )}
      </div>
      <div className="reactBar">
        <div className="postReact">
          <ul>
            <li>
              <Heart />
              {likes} Likes
            </li>
            <hr />
            <li>
              <Chat />
              {comment} Comments
            </li>
            <hr />
            <li>
              <Reply />
              {share} Share
            </li>
          </ul>
        </div>
        <div className="stroke" />
      </div>

      {commentBar && (
        <div className="comment">
          <ProfileImage
            src={Images.Profile1}
            alt="profile"
            showBadge={false}
            width="32px"
            height="32px"
          />
          <Input
            type="text"
            name="comment"
            placeholder="Write your comment"
            className="commentBar"
            suffixIcon1={<Smile width="18px" height="18px" />}
            suffixIcon2={<Clip />}
          />
        </div>
      )}
    </div>
  );
};

export default PostCard;
