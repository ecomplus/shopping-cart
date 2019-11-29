export default (self, emitter, [canSave = true]) => {
  const { data, save } = self

  data.items = []
  if (data.subtotal) {
    data.subtotal = 0
  }
  emitter.emit('clear', { data })
  if (canSave) {
    save(false)
  }

  return self
}

/**
 * @method
 * @name EcomCart#clear
 * @description Remove all items from cart and save.
 *
 * @param {boolean} [canSave=true] - Save empty cart to local storage
 *
 * @returns {self}
 *
 * @example

ecomCart.clear()

 */
