import fixItemQuantity from './../lib/fix-item-quantity'
import emitter from './../lib/emitter'

export default (self, itemId, quantity = 1, save = true) => {
  const { cart } = self
  // find respective item on list by ID
  const item = cart.items.find(({ _id }) => _id === itemId)
  if (item) {
    item.quantity += quantity
    fixItemQuantity(item)
    if (save) {
      self.save()
    }
  } else {
    return null
  }
  emitter('increaseItemQnt', { cart, item })
  return item
}

/**
 * @method
 * @name EcomCart#increaseItemQnt
 * @description Increase quantity of specific item by ID and save cart.
 *
 * @param {string} itemId - The unique object ID of item
 * @param {integer} [quantity=1] - Quantity to increase (can be negative)
 * @param {boolean} [save=true] - Save cart data
 *
 * @returns {object|null} Returns the updated item object or null
 * when item not found.
 *
 * @example

cart.increaseItemQnt('12300000000000000000000f', 3)

 */
