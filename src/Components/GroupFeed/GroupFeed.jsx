import React, { useState } from "react";
import "./GroupFeed.scss";
import { Images } from "../../assets/images/images";
import { ReactComponent as Plus } from "../../assets/svgs/plus.svg";

import ProfileImage from "../ProfileImage/ProfileImage";
import Button from "../Button/Button";
import MoreOption from "../MoreOption/MoreOption";
import PostCard from "../PostCard/PostCard";
import TabsComponent from "../TabComponent/TabComponent";
import AboutFeed from "../TabsFeed/AboutFeed";
import MediaFeed from "../TabsFeed/MediaFeed";
import EventFeed from "../TabsFeed/EventFeed";
import WatchVideos from "../../Pages/Layout/WatchVideos";
import TabComponent from "../TabComponent/TabComponent";
import Table from "../Table/Table";

function GroupFeed() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const tabsData = [
    {
      title: "About",
      content: <AboutFeed />,
    },
    {
      title: "Media",
      content: <MediaFeed />,
    },
    {
      title: "Events",
      content: <EventFeed />,
    },
    {
      title: "Members",
      content: <MediaFeed />,
    },
    {
      title: "Chat",
      content: <WatchVideos />,
    },
    {
      title: "Files",
      content: <Table />,
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="wrapper groupWrapper">
          <div className="col-12">
            <div className="groupThumbnail">
              <img src={Images.Thumbnail} alt="thumbnail" />
              <div className="groupInfo">
                <div className="infoData">
                  <img
                    src={Images.Shortcut1}
                    alt="shortcut"
                    className="infoLogo"
                  />
                  <div className="data">
                    <h3>Unisense Digital Agency</h3>
                    <p>Open Group • 24,5k members</p>
                  </div>
                </div>
                <div className="groupMembers">
                  <div className="users">
                    <ProfileImage
                      src={Images.Profile4}
                      alt="profile"
                      showBadge={false}
                      width="32px"
                      height="32px"
                    />

                    <ProfileImage
                      src={Images.Profile1}
                      alt="profile"
                      showBadge={false}
                      width="32px"
                      height="32px"
                    />

                    <ProfileImage
                      src={Images.Profile7}
                      alt="profile"
                      showBadge={false}
                      width="32px"
                      height="32px"
                    />

                    <ProfileImage
                      src={Images.Profile6}
                      alt="profile"
                      showBadge={false}
                      width="32px"
                      height="32px"
                    />

                    <ProfileImage
                      text="+2"
                      showBadge={false}
                      width="32px"
                      height="32px"
                    />
                  </div>
                  <Button
                    title="Join"
                    icon={<Plus />}
                    className="joinBtn btnPrimary "
                  />
                </div>
              </div>

              {/* <div className="menuGroup">
                <div className="slideAxis">
                  <div
                    className="slideLine"
                    style={{
                      transform: `translateX(calc(${activeTab} * (100% / ${tabsData.length})))`,
                    }}
                  />
                </div>

                {tabsData.map((tab, index) => (
                  <div
                    key={index}
                    className="menuTab"
                    onClick={() => setActiveTab(index)}
                  >
                    <span
                      className={`tabTitle ${activeTab === index ? "active" : ""
                        }`}
                    >
                      {tab.title}
                    </span>
                  </div>
                ))}
                <MoreOption />
              </div> */}
              <div>
                <TabComponent
                  tabs={tabsData}
                  activeTab={activeTab}
                  handleTabClick={handleTabClick}
                />
              </div>
            </div>
          </div>
          <div className="tab-content">{tabsData[activeTab].content}</div>
        </div>
      </div>
    </div>
  );
}

export default GroupFeed;
