import CartActionTypes from './cart.types';
import { addToCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden // convert to the opposite
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addToCart(state.cartItems, action.payload)
      }
    default: 
      return state;
  }
}

export default cartReducer;