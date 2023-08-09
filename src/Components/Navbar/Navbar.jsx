import { LogoutOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Images } from "../../assets/images/images";
import { ReactComponent as Adduser } from "../../assets/svgs/addUser.svg";
import { ReactComponent as DownArrow } from "../../assets/svgs/downArrow.svg";
import { ReactComponent as Hamburger } from "../../assets/svgs/hamburger.svg";
import { ReactComponent as Notification } from "../../assets/svgs/notification.svg";
import { ReactComponent as Settings } from "../../assets/svgs/settings.svg";
import ProfileImage from "../ProfileImage/ProfileImage";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.scss";

function Navbar({ title, collapsed, setCollapsed }) {
  // const [isOpen, setIsOpen] = useState(true);
  // const [active, setActive] = useState("");
  const [openProfile, setOpenProfile] = useState(false);
  const [openNoti, setOpenNoti] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [openUser, setOpenUser] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  const profileOptions = [
    {
      icon: <UserOutlined />,
      title: "Profile",
    },
    {
      icon: <MailOutlined />,
      title: "Inbox",
    },
    {
      icon: <LogoutOutlined />,
      title: "Logout",
    },
  ];

  const settings = [
    "Dark Mode",
    "Media",
    "Active Status",
    "Terms of Service",
    "Privacy Policy",
  ];

  const notification = [
    {
      icon: Images.Profile5,
      title: "Angela Joined the Team!",
      description: "Congratulate her",
    },
    {
      icon: Images.Profile2,
      title: "Ahmed completed tasks",
      description: "Assign him new tasks",
    },
    {
      icon: Images.Profile3,
      title: "New Payment received",
      description: "Check your earnings",
    },
  ];

  return (
    <div className={`navbar ${collapsed ? "navbarOpen" : ""}`}>
      <Hamburger
        onClick={toggleSidebar}
        width={30}
        height={30}
        className="navMenu"
      />
      <h2 className="title">{title}</h2>
      <SearchBar suffixIcon1={<DownArrow />} placeholder="Search" />

      <div className="navData">
        <div className="widgets">
          <div className="widgetsContent">
            <Adduser onClick={() => setOpenUser((prev) => !prev)} />
            {openUser && (
              <ul className="dropdown userPopover">
                <li>Add User</li>
              </ul>
            )}
          </div>
          <div className="widgetsContent">
            <Notification onClick={() => setOpenNoti((prev) => !prev)} />
            {openNoti && (
              <ul className="dropdown notiPopover">
                {notification.map((option, index) => (
                  <li className="notiWrapper">
                    <img src={option.icon} alt="avatar" />
                    <div className="notiContent">
                      <h6 class="notiTitle">{option.title}</h6>
                      <p class="notiDescription">{option.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="widgetsContent">
            <Settings onClick={() => setOpenSettings((prev) => !prev)} />
            {openSettings && (
              <ul className="dropdown settings">
                {settings.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="profile" onClick={() => setOpenProfile((prev) => !prev)}>
        <ProfileImage
          src={Images.Profile1}
          alt="profile"
          showBadge={false}
          width="47px"
          height="47px"
        />
      </div>
      {openProfile && (
        <div className="dropdown dropdownProfile">
          <ul>
            <li className="profileTitle">Artem Kyznetsov</li>
            <div className="stroke"></div>
            {profileOptions.map((option, index) => (
              <div className="profileItems">
                <li>{option.icon}</li>
                <li key={index}>{option.title}</li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
