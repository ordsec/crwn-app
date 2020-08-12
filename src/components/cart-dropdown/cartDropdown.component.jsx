import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/customButton.component';
import CartItem from '../cart-item/cartItem.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cartDropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))
      ) : (
        <span className='empty-message'>Nothing here yet!</span>
      )}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

// use the cart items selector for better separation
// and to ensure the dropdown doesn't re-render 
// upon every single state change (e.g. when changing
// to a different page or signing out)
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);