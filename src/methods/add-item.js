import { randomObjectId } from '@ecomplus/utils'
import fixItemQuantity from './../lib/fix-item-quantity'
import fixSubtotal from './../lib/fix-subtotal'

// add item to cart
export default ({ data, save }, emitter, [newItem, canSave = true]) => {
  // check required fields
  if (typeof newItem.product_id !== 'string' ||
    typeof newItem.quantity !== 'number' || !(newItem.quantity >= 0) ||
    typeof newItem.price !== 'number' || !(newItem.price >= 0)) {
    // trying to add invalid item object
    return null
  }

  let fixedItem
  for (let i = 0; i < data.items.length; i++) {
    const item = data.items[i]
    // check IDs
    if (item.product_id === newItem.product_id && item.variation_id === newItem.variation_id) {
      // same product and variation
      // update quantity and price
      item.quantity += newItem.quantity
      if (newItem.price) {
        item.price = newItem.price
      }
      if (newItem.final_price) {
        item.final_price = newItem.final_price
      }
      fixedItem = fixItemQuantity(item)
    }
  }

  if (!fixedItem) {
    if (!newItem._id) {
      // generate random ObjectID
      newItem._id = randomObjectId()
    }
    // add item to cart
    data.items.push(newItem)
    fixedItem = fixItemQuantity(newItem)
  }

  // fix cart subtotal and emit event with updated cart data
  fixSubtotal(data)
  emitter.emit('addItem', { data, item: fixedItem })
  if (canSave) {
    // also saves to local storage
    save(false)
  }

  return fixedItem
}

/**
 * @method
 * @name EcomCart#addItem
 * @description Push new item to cart data and save.
 *
 * @param {object} newItem - New cart item object
 * @param {boolean} [canSave=true] - Save cart data
 *
 * @returns {object|null} Returns the saved item object (with `_id`) or null
 * when new item object is invalid.
 *
 * @example

cart.addItem({
  _id: '12300000000000000000000f',
  product_id: '123a5432109876543210cdef',
  sku: 's-MP_2B4',
  name: 'Mens Pique Polo Shirt',
  quantity: 4,
  price: 42.9,
  keep_item_price: false
})

 */
