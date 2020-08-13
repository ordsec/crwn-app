import { createSelector } from 'reselect';

// LEAST SPECIFIC
const selectCart = state => state.cart;

// MORE SPECIFIC
// takes a collection of input selectors
// and a function that will return a value
// that we want out of the selector. 
// the function's parameters are outputs
// of each selector, in order received
// in the collection from the first argument.
// this is now a MEMOIZED selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

// EVEN MORE SPECIFIC
// here we're passing what's stored in selectCartItems
// because we rarely need a large piece of state
// such as state.cart - rather, we need specifics.
// this is where we're calculating the total number 
// of items in the cart
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accQty, item) => accQty + item.quantity, 0
  )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accQty, item) => accQty + item.price * item.quantity, 0
  )
);