import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/customButton.component';
import CartItem from '../cart-item/cartItem.component';

import './cartDropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems }}) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);