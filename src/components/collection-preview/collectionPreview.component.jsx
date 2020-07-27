import React from 'react';

import CollectionItem from '../collection-item/collectionItem.component';

import './collectionPreview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items
          // grab only the first 4 items of each collection
          .filter((item, idx) => idx < 4)
          // display each one in its own div
          .map(({ id, ...otherProps }) => (
            <CollectionItem 
              key={id} 
              {...otherProps}
            />
          ))
      }
    </div>
  </div>
);

export default CollectionPreview;