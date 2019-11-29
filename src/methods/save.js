import fixSubtotal from './../lib/fix-subtotal'

export default (self, emitter, [canFixSubtotal = true]) => {
  const { data, storageKey, localStorage } = self

  if (canFixSubtotal) {
    fixSubtotal(data)
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
 * @param {boolean} [canFixSubtotal=true] - Fix cart subtotal before saving
 *
 * @returns {self}
 *
 * @example

ecomCart.save()

 */
