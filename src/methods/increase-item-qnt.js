import fixItemQuantity from './../lib/fix-item-quantity'
import fixSubtotal from './../lib/fix-subtotal'

export default ({ data, save }, emitter, [itemId, quantity = 1, canSave = true]) => {
  // find respective item on list by ID
  const item = data.items.find(({ _id }) => _id === itemId)
  if (!item) {
    return null
  }
  item.quantity += quantity
  fixItemQuantity(item)
  fixSubtotal(data)
  emitter.emit('increaseItemQnt', { data, item })
  if (canSave) {
    save(false)
  }
  return item
}

/**
 * @method
 * @name EcomCart#increaseItemQnt
 * @description Increase quantity of specific item by ID and save cart.
 *
 * @param {string} itemId - The unique object ID of item
 * @param {integer} [quantity=1] - Quantity to increase (can be negative)
 * @param {boolean} [canSave=true] - Save cart data
 *
 * @returns {object|null} Returns the updated item object or null
 * when item not found.
 *
 * @example

cart.increaseItemQnt('12300000000000000000000f', 3)

 */
