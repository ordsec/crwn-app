import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/customButton.component';
import { addToCart } from '../../redux/cart/cart.actions';

import './collectionItem.styles.scss';
// import CollectionPreview from '../collection-preview/collectionPreview.component';

const CollectionItem = ({ item, addToCart }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{ name }</span>
        <span className='price'>${ price }</span>
      </div>
      <CustomButton 
        onClick={() => addToCart(item)} 
        inverted
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);