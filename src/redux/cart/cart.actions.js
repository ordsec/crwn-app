import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addToCart = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

// remove the entire item at checkout,
// regardless of quantity
export const removeFromCart = item => ({
  type: CartActionTypes.REMOVE_FROM_CART,
  payload: item
});

// decrease quantity at checkout
export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});