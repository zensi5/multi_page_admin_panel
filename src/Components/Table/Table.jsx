import React from "react";
import { Images } from "../../assets/images/images";
import "./Table.scss";
import { ReactComponent as Diamond } from "../../assets/svgs/diamond.svg";
import { ReactComponent as DownArrow } from "../../assets/svgs/downArrow.svg";
import { ReactComponent as Figma } from "../../assets/svgs/figma.svg";
import { ReactComponent as File } from "../../assets/svgs/file.svg";
import { ReactComponent as Pdf } from "../../assets/svgs/pdf.svg";
import { ReactComponent as Picture } from "../../assets/svgs/picture.svg";
import MoreOption from "../MoreOption/MoreOption";
import ProfileImage from "../ProfileImage/ProfileImage";

function Table() {
  const table = [
    {
      title: "Boxboard.fig",
      icon: <Figma />,
      date: "March 12, 2021",
      size: "1,2 MB",
      bgColor: "#F5FCF9",
      profile: (
        <div className="tableProfile">
          <ProfileImage
            src={Images.Profile4}
            alt="profile"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />
          <ProfileImage
            src={Images.Profile1}
            alt="profile"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />
          <ProfileImage
            src={Images.Profile7}
            alt="profile"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />
          <ProfileImage
            src={Images.Profile6}
            alt="profile"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />
          <ProfileImage
            text="+2"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />
        </div>
      ),
    },
    {
      title: "Createpull.fig",
      icon: <Figma />,
      date: "March 11, 2021",
      size: "1,0 MB",
      bgColor: "#F5FCF9",
      profile: (
        <div className="tableProfile">
          <ProfileImage
            src={Images.Profile4}
            alt="profile"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />
          <ProfileImage
            src={Images.Profile1}
            alt="profile"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />

          <ProfileImage
            src={Images.Profile7}
            alt="profile"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />
          <ProfileImage
            text="+2"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />
        </div>
      ),
    },
    {
      title: "Unisense.sketch",
      icon: <Diamond />,
      date: "March 10, 2021",
      size: "2,3 MB",
      bgColor: "#FFFBF1",
      profile: (
        <div className="tableProfile">
          <ProfileImage
            src={Images.Profile6}
            alt="profile"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />
          <ProfileImage
            src={Images.Profile7}
            alt="profile"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />
          <ProfileImage
            text="+2"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />
        </div>
      ),
    },
    {
      title: "Branding.pdf",
      icon: <Pdf />,
      date: "March 10, 2021",
      size: "1,7 MB",
      bgColor: "FFF6F4",
      profile: (
        <div className="tableProfile">
          <ProfileImage
            src={Images.Profile4}
            alt="profile"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />
          <ProfileImage
            src={Images.Profile1}
            alt="profile"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />
          <ProfileImage
            src={Images.Profile7}
            alt="profile"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />
          <ProfileImage
            src={Images.Profile6}
            alt="profile"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />
          <ProfileImage
            text="+2"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />
        </div>
      ),
    },
    {
      title: "Team Meetup.jpg",
      icon: <Picture />,
      date: "March 09, 2021",
      size: "0,8 KB",
      bgColor: "#F4F8FF",
      color: "#377DFF",
      profile: (
        <div className="tableProfile">
          <ProfileImage
            src={Images.Profile4}
            alt="profile"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />
          <ProfileImage
            src={Images.Profile1}
            alt="profile"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />
          <ProfileImage
            src={Images.Profile7}
            alt="profile"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />
          <ProfileImage
            src={Images.Profile6}
            alt="profile"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />
          <ProfileImage
            text="+2"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />
        </div>
      ),
    },
    {
      title: "Price for Customers.xls",
      icon: <File />,
      date: "March 08, 2021",
      size: "1,2 MB",
      bgColor: "#F5FCF9",
      color: "#38CB89",
      profile: (
        <div className="tableProfile">
          <ProfileImage
            src={Images.Profile7}
            alt="profile"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />
          <ProfileImage
            src={Images.Profile6}
            alt="profile"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />
          <ProfileImage
            text="+2"
            showBadge={false}
            widdiv="32px"
            height="32px"
          />
        </div>
      ),
    },
  ];
  return (
    <div className="tablecontainer">
      <table class="table">
        <tbody>
          <tr className="tableHead">
            <th>
              <div className="thead">
                <h4>NAME</h4>
                <DownArrow />
              </div>
            </th>
            <th>
              <div className="thead">
                <h4>LAST EDIT</h4>
                <DownArrow />
              </div>
            </th>
            <th>
              <div className="thead">
                <h4>SIZE</h4>
                <DownArrow />
              </div>
            </th>
            <th>
              <div className="thead">
                <h4>MEMBERS</h4>
                <DownArrow />
              </div>
            </th>
            <th></th>
          </tr>
          {table.map((data, key) => {
            return (
              <tr key={key} className="tableRow">
                <td className="tableName">
                  <span
                    style={{
                      backgroundColor: data.bgColor,
                      color: data.color,
                    }}
                    className="tableIcon"
                  >
                    {data.icon}
                  </span>
                  <p>{data.title}</p>
                </td>
                <td className="tableCell">{data.date}</td>
                <td className="tableCell">{data.size}</td>
                <td className="tableCell"> {data.profile}</td>
                <td className="tableCell">
                  <MoreOption />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
