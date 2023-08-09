import React, { useState } from 'react';
import './TabComponent.scss';
import MoreOption from '../MoreOption/MoreOption';


const Tab = ({ tabs, activeTab, handleTabClick, children }) => {
  return (
    <div className="tabs">

      <div className="tabWrapper">
        <div className="tabline"></div>
        {tabs.map((tab, index) => (
          <>
            <div
              key={index}
              className={`tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </div>
          </>
        ))}
        <MoreOption />
      </div>
      {children}
    </div>
  );
};

export default Tab;
