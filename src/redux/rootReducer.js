import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
// the root reducer represents the entire state of our app

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});