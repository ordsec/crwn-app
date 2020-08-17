export const addToCart = (cartItems, newItem) => {
  const existing = cartItems.find(item => item.id === newItem.id);

  // if the item exists in the cart,
  if (existing) {
    // return a new array (must not mutate state)
    // where, if the item is already there,
    // we'll update its quantity;
    // otherwise, just map the item as is
    return cartItems.map(item => {
      return item.id === newItem.id ? {
        ...item,
        quantity: item.quantity + 1
      } : item;
    });
  }

  // if it doesn't exist, return the updated items array
  // with the new item and its quantity set to 1
  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const removeFromCart = (cartItems, itemToRemove) => {
  // find the item
  const existing = cartItems.find(item => item.id === itemToRemove.id);

  // if its quantity is 1, filter it out
  if (existing.quantity === 1) {
    return cartItems.filter(item => item.id !== itemToRemove.id);
  }

  // if it's more, map the cart items to a new array
  return cartItems.map(item => {
    // for the item we're removing, decrease its quantity
    if (item.id === itemToRemove.id) {
      return { ...item, quantity: item.quantity - 1 };
    // for everything else, simply put it in the array
    } else return item;
  });
};