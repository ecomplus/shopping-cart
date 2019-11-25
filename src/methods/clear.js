export default (self, emitter, [canSave = true]) => {
  const { data, save } = self
  // empty the items array and save
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
 * @returns {self}
 *
 * @example

cart.clear()

 */
