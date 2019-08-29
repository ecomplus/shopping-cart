import emitter from './../lib/emitter'

export default ({ cart, save }) => {
  // empty the items array and save
  cart.items = []
  emitter.emit('clear', { cart })
  return save()
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
