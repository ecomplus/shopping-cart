import emitter from './../lib/emitter'

export default ({ data, save }) => {
  // empty the items array and save
  data.items = []
  emitter.emit('clear', { data })
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
