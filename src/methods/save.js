export default self => {
  const { cart, storageKey, localStorage } = self
  // fix cart subtotal first
  cart.subtotal = 0
  for (let i = 0; i < cart.items.length; i++) {
    const item = cart.items[i]
    cart.subtotal += item.quantity * (item.final_price || item.price)
  }
  if (typeof localStorage === 'object' && localStorage) {
    localStorage.setItem(storageKey, JSON.stringify(cart))
  }
  return self
}

/**
 * @method
 * @name EcomCart#save
 * @description Save cart object to local storage.
 *
 * @returns {self}
 *
 * @example

cart.save()

 */
