import React from 'react';

import './collectionPreview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='çollection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items
          // grab only the first 4 items of each collection
          .filter((item, idx) => idx < 4)
          // display each one in its own div
          .map(item => (
            <div key={item.id}>{item.name}</div>
          ))
      }
    </div>
  </div>
);

export default CollectionPreview;