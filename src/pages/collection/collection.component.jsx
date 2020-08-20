import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collectionItem.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (<div className='collection-page'>
    <h2>COLLECTION PAGE (under construction)</h2>
  </div>)
};

// ownProps are the props of the component 
// we're wrapping in `connect`
const mapStateToProps = (state, ownProps) => ({
  // selectCollection returns a function,
  // which we then call on the incoming state.
  // this is because this selector needs a part
  // of the state depending on the URL param
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);