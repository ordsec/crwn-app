import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addToCart = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const deleteFromCart = item => ({
  type: CartActionTypes.DELETE_FROM_CART,
  payload: item
});