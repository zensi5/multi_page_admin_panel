import React from 'react';
import { Popover } from 'antd';
import { ReactComponent as MoreMenu } from '../../assets/svgs/moreMenu.svg';
import './MoreOption.scss';

const content = (
  <div>
    <p>Edit</p>
    <p>Delete</p>
  </div>
);

const MoreOption = () => (
  <div className='moreMenu'>
    <Popover placement="bottomLeft" content={content} trigger="click" overlayClassName='popover'>
      <div><MoreMenu /></div>
    </Popover>
  </div>
);

export default MoreOption;
