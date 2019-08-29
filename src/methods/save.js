import emitter from './../lib/emitter'

export default self => {
  const { data, storageKey, localStorage } = self
  // fix cart subtotal first
  data.subtotal = 0
  for (let i = 0; i < data.items.length; i++) {
    const item = data.items[i]
    data.subtotal += item.quantity * (item.final_price || item.price)
  }
  if (typeof localStorage === 'object' && localStorage) {
    localStorage.setItem(storageKey, JSON.stringify(data))
  }
  emitter.emit('save', { data })
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
