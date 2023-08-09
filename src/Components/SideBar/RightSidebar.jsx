import React from "react";
import "./RightSidebar.scss";
// import SearchBar from '../SearchBar/SearchBar';
import { Images } from "../../assets/images/images";
import { ReactComponent as Search } from "../../assets/svgs/search.svg";
import ProfileImage from "../ProfileImage/ProfileImage";
import SearchBar from "../SearchBar/SearchBar";

function RightSidebar() {
  const sideItems = [
    {
      section: "YOUR PAGES",
      subItems: [
        {
          title: "Unisense Team",
          link: "/shortcut1",
          icon: Images.Shortcut1,
        },
        {
          title: "DesignStack",
          link: "/shortcut2",
          icon: Images.Shortcut2,
        },
        {
          title: "UI8 Community",
          link: "/shortcut3",
          icon: Images.Shortcut3,
        },
      ],
    },
    {
      section: "FRIENDS",
      subItems: [
        {
          title: "Julia Rokina",
          link: "/friend1",
          icon: (
            <ProfileImage
              src={Images.Profile7}
              alt="profile"
              showBadge={false}
              width="38px"
              height="38px"
            />
          ),
          number: 2,
        },
        {
          title: "Sergei Filatov",
          link: "/friend2",
          icon: (
            <ProfileImage
              src={Images.Profile2}
              alt="profile"
              showBadge={true}
              width="38px"
              height="38px"
            />
          ),
        },
        {
          title: "Alpamys Moldashev",
          link: "/friend3",
          icon: (
            <ProfileImage
              src={Images.Profile3}
              alt="profile"
              showBadge={false}
              width="38px"
              height="38px"
            />
          ),
        },
        {
          title: "Bogdan Krivenchenko",
          link: "/friend3",
          icon: (
            <ProfileImage
              src={Images.Profile4}
              alt="profile"
              showBadge={false}
              width="38px"
              height="38px"
            />
          ),
        },
        {
          title: "Daniel Falka",
          link: "/friend3",
          icon: (
            <ProfileImage
              src={Images.Profile5}
              alt="profile"
              showBadge={false}
              width="38px"
              height="38px"
            />
          ),
          number: 3,
        },
        {
          title: "Lesya Borodina",
          link: "/friend3",
          icon: (
            <ProfileImage
              src={Images.Profile6}
              alt="profile"
              showBadge={true}
              width="38px"
              height="38px"
            />
          ),
        },
      ],
    },
    {
      section: "GROUPS",
      subItems: [
        {
          title: "Unisense Lab.",
          link: "/shortcut1",
          icon: Images.Icons1,
        },
        {
          title: "Design Media",
          link: "/shortcut2",
          icon: Images.Icons2,
          number: 4,
        },
      ],
    },
  ];

  return (
    <aside className="rightSidebar">
      <SearchBar
        prefix={<Search />}
        placeholder="Search"
      />
      <ul className="rightHeader">
        {sideItems.map((item, index) => (
          <React.Fragment key={index}>
            <li className="rightWrapper">{item.section}</li>
            {item.subItems.map((subItem, subIndex) => (
              <li key={subIndex} className="rightItem">
                {typeof subItem.icon === "object" ? (
                  subItem.icon
                ) : (
                  <img src={subItem.icon} alt="img" />
                )}
                <div className="itemContent">
                  <span className="itemName">{subItem.title}</span>
                  {subItem.number && <span className="itemNumber">{subItem.number}</span>}
                </div>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </aside>
  );
}

export default RightSidebar;
