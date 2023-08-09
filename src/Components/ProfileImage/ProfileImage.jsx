import React from "react";
import "./ProfileImage.scss";

function ProfileImage({ src, alt, showBadge, width, height, text }) {
  return (
    <div className="profileContainer">
      {showBadge && <div className="badge"></div>}
      {src ? (
        <img
          src={src}
          alt={alt}
          className="profileImage"
          style={{ width, height }}
        />
      ) : (
        <div className="morePeople" style={{ width, height }}>
          {text}
        </div>
      )}
    </div>
  );
}

export default ProfileImage;
