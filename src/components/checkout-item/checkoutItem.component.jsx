import React from 'react';
import { connect } from 'react-redux';

import { removeFromCart, addToCart, removeItem } from '../../redux/cart/cart.actions.js';
    
import './checkoutItem.styles.scss';

const CheckoutItem = ({ cartItem, clearFromCart, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div 
          className='arrow'
          onClick={() => removeItem(cartItem)}
        >
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div 
          className='arrow'
          onClick={() => addItem(cartItem)}
        >
          &#10095;
        </div>
      </span>
      <span className='price'>${price * quantity}</span>
      <div 
        className='remove-button' 
        onClick={() => clearFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  // delete from cart entirely, no matter the quantity
  clearFromCart: item => dispatch(removeFromCart(item)),
  // add one to the existing quantity
  addItem: item => dispatch(addToCart(item)),
  // decrease the existing quantity or remove if it's 1
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);