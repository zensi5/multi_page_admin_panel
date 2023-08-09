import React, { useState } from "react";
import "./LeftSidebar.scss";
import ProfileImage from "../ProfileImage/ProfileImage";
import { Images } from "../../assets/images/images";
import { ReactComponent as Feed } from "../../assets/svgs/feed.svg";
import { ReactComponent as Friend } from "../../assets/svgs/friends.svg";
import { ReactComponent as Clipboard } from "../../assets/svgs/clipboard.svg";
import { ReactComponent as Youtube } from "../../assets/svgs/youtube.svg";
import { ReactComponent as Picture } from "../../assets/svgs/picture.svg";
import { ReactComponent as File } from "../../assets/svgs/file.svg";
import { ReactComponent as Cart } from "../../assets/svgs/cart.svg";
import { ReactComponent as DownArrow } from "../../assets/svgs/downArrow.svg";
import { ReactComponent as UpArrow } from "../../assets/svgs/upArrow.svg";
import { ReactComponent as Hamburger } from "../../assets/svgs/hamburger.svg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function LeftSidebar({ collapsed, setCollapsed }) {
  const [submenu, setSubmenu] = useState(false);
  const [selectedPage, setSelectedPage] = useState("");
  const showSubmenu = () => setSubmenu(!submenu);
  const toggleSidebar = () => setCollapsed(!collapsed);

  const handleItemClick = (page) => {
    setSelectedPage(page);
  };

  const sideItems = [
    {
      title: "Feed",
      link: "/homepage",
      icon: <Feed />,
    },
    {
      title: "Friends",
      link: "/firends",
      icon: <Friend />,
    },
    {
      title: "Event",
      link: "/clipboard",
      icon: <Clipboard />,
    },
    {
      title: "Watch Videos",
      link: "/watchvideos",
      icon: <Youtube />,
    },
    {
      title: "Photo",
      link: "/picture",
      icon: <Picture />,
    },
    {
      title: "Files",
      link: "/filespage",
      icon: <File />,
    },
    {
      title: "Marketplace",
      link: "/cart",
      icon: <Cart />,
    },
    {
      // title: "SHORTCUTS",
      //  link: "/shortcuts",
      // icon: images.Logo,
      iconOpened: (
        <div className="shortcutWrapper">
          <span className="shortcutBtn">SHORTCUTS</span>
          <DownArrow />
        </div>
      ),
      iconClosed: (
        <div className="shortcutWrapper">
          <span className="shortcutBtn">SHORTCUTS</span>
          <UpArrow />
        </div>
      ),
      subMenu: [
        {
          title: "Unisense Team",
          link: "/unisense",
          icon: Images.Shortcut1,
          number: 2,
        },
        {
          title: "DesignStack",
          link: "/designstack",
          icon: Images.Shortcut2,
        },
        {
          title: "UI8 Community",
          link: "/uicommunity",
          icon: Images.Shortcut3,
        },
      ],
    },
  ];

  return (
    <aside className={`leftSidebar ${collapsed ? "collapsed" : " "}`}>
      <div className={`sideLogo ${collapsed ? "collapsed" : ""}`}>
        <a href="/HomePage" className="iconWrapper">
          {collapsed ? (
            <img src={Images.LogoIcon} alt="logo" />
          ) : (
            <>
              <img src={Images.Logo} alt="logo" />
            </>
          )}
        </a>
        <Hamburger
          onClick={toggleSidebar}
          width={30}
          height={30}
          className="hamburger"
        />
      </div>

      <div className="userWrapper">
        <ProfileImage
          src={Images.Profile1}
          alt="profile"
          showBadge={true}
          width="40px"
          height="40px"
        />
        <div className="userInfo">
          <h4>Artem Kyznetsov</h4>
          <p>@k4aiy</p>
        </div>
      </div>

      <ul className={`sidebarPages ${collapsed ? "collapsed" : ""}`}>
        {sideItems.map((item, index) => (
          <>
            <Link to={item.link} onClick={() => showSubmenu()} key={index}>
              <div
                className={`sidebarItem ${
                  selectedPage === item.link ? "selected" : ""
                }`}
                onClick={() => handleItemClick(item.link)}
              >
                {item.icon}
                <span className="itemName">{item.title}</span>
              </div>
              <div>
                {item.subMenu && submenu
                  ? item.iconOpened
                  : item.subMenu
                  ? item.iconClosed
                  : null}
              </div>
            </Link>

            {submenu &&
              item.subMenu &&
              item.subMenu.map((subItem, subIndex) => (
                <Link to={subItem.link} key={subIndex}>
                  <div className="sidebarSubmenu">
                    <img src={subItem.icon} alt="shortcut-menu" />
                    <div className="submenuContent">
                      <span className="submenuName">{subItem.title}</span>
                      {subItem.number && (
                        <span className="itemNumber">{subItem.number}</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
          </>
        ))}
        <Button title="See More" className="sidebarButton" />
      </ul>
    </aside>
  );
}

export default LeftSidebar;
