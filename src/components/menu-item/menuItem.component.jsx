import React from 'react';
import { withRouter } from 'react-router-dom';

import './menuItem.styles.scss';

const MenuItem = ({ title, imgUrl, size, history, pageUrl, match }) => (
  <div 
    className={`${size} menu-item`}
    // match holds the current url
    onClick={() => history.push(`${match.url}${pageUrl}`)}
  >
    <div 
      className='background-image'
      style={{
        backgroundImage: `url(${imgUrl})`
      }}
    >

    </div>
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

// this returns an upgraded MenuItem component
// with access to history/match/etc. props
// that react-router-dom provides,
// without having to drill those props
// all the way down from App.js
export default withRouter(MenuItem);