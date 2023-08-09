import React from "react";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Images } from "../../assets/images/images";
import { ReactComponent as Upload } from "../../assets/svgs/download.svg";
import { ReactComponent as Search } from "../../assets/svgs/search.svg";
import Button from "../Button/Button";
import CustomSelect from "../CustomSelect/CustomSelect";
import SearchBar from "../SearchBar/SearchBar";
import Table from "../Table/Table";
import "./FilesFeed.scss";

function FilesFeed() {
  const language = [
    { label: "Popular", value: "option1" },
    { label: "What's new", value: "option2" },
    { label: "Discount", value: "option3" },
  ];

  const defaultSort = (
    <div className="sorting">
      <span className="sort">Sort by:</span>
      <span className="sort filter">Popular</span>
    </div>
  );

  const cards = [
    {
      title: "Boxboard.fig",
      image: Images.Figma,
      bgColor: "#F5FCF9",
    },
    {
      title: "Project Files",
      image: Images.Folder1,
      bgColor: "#F4F8FF",
    },
    {
      title: "Createpull.fig",
      image: Images.Figma,
      bgColor: "#F5FCF9",
    },
    {
      title: "Unisense.sketch",
      image: Images.Folder2,
      bgColor: "#FFFBF1",
    },
    {
      title: "Unisense Files",
      image: Images.Folder1,
      bgColor: "#F4F8FF",
    },
    {
      title: "Boxboard.fig",
      image: Images.Figma,
      bgColor: "#F5FCF9",
    },
    {
      title: "Project Files",
      image: Images.Folder1,
      bgColor: "#F4F8FF",
    },
    {
      title: "Createpull.fig",
      image: Images.Figma,
      bgColor: "#F5FCF9",
    },
    {
      title: "Project Files",
      image: Images.Folder1,
      bgColor: "#F4F8FF",
    },
    {
      title: "Unisense.sketch",
      image: Images.Folder2,
      bgColor: "#FFFBF1",
    },
    {
      title: "Createpull.fig",
      image: Images.Figma,
      bgColor: "#F5FCF9",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="wrapper d-flex">
          <div className="quickAccess">
            <h3>Quick Access</h3>
            <CustomSelect selectOption={language} defaultOption={defaultSort} />
          </div>
          <Swiper
            slidesPerView={7}
            spaceBetween={20}
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            breakpoints={{
              320: { slidesPerView: 1.5 },
              575: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1400: { slidesPerView: 4.5 },
              1600: { slidesPerView: 6.5 },
            }}
          >
            {cards.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card" style={{ backgroundColor: item.bgColor }}>
                  <img src={item.image} alt={item.title} />
                  <h4>{item.title}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="recentFiles">
            <h3>Recent Files</h3>
            <div className="actions">
              <SearchBar
                forLabel="search"
                prefix={<Search />}
                type="text"
                name="search"
                id="search"
                className="searchBar"
              />
              <Button
                title="Upload"
                icon={<Upload />}
                className="uploadBtn btnPrimary"
              />
            </div>
          </div>

          {/* <div className="tablecontainer">
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
          </div> */}
          <Table />
        </div>
      </div>
    </div>
  );
}

export default FilesFeed;
