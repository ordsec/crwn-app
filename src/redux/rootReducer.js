import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
  // at what point do we want 
  // to start storing everything
  key: 'root',
  storage,
  // what we're actually storing
  // (user is stored by firebase, 
  // so no need for that)
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

// export the modified root reducer as default
export default persistReducer(persistConfig, rootReducer);