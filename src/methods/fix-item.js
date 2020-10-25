import fixItemQuantity from './../lib/fix-item-quantity'
import fixItemFinalPrice from './../lib/fix-item-final-price'
import fixSubtotal from './../lib/fix-subtotal'

export default ({ data, save }, emitter, [item, canSave = true]) => {
  if (!item) {
    return null
  }

  fixItemQuantity(item)
  fixItemFinalPrice(item)
  fixSubtotal(data)

  /**
   * @event EcomCart#fixItem
   * @type {object}
   * @property {object} data - Shopping cart data
   * @property {object} item - Cart item changed
   * @example ecomCart.on('fixItem', ({ data, item }) => { console.log(data, item) })
   */
  emitter.emit('fixItem', { data, item })

  if (canSave) {
    save(false)
  }
  return item
}

/**
 * @method
 * @name EcomCart#fixItem
 * @description Check and fix (if needed) item quantity, final price and cart subtotal.
 *
 * @param {string} item - The cart item object (by reference)
 * @param {boolean} [canSave=true] - Save cart data
 *
 * @returns {object|null} Returns the updated item object or null
 * when item not found.
 *
 * @example

const item = ecomCart.addItem({
  _id: '12300000000000000000000f',
  product_id: '123a5432109876543210cdef',
  sku: 's-MP_2B4',
  name: 'Mens Pique Polo Shirt',
  quantity: 4,
  price: 42.9,
  keep_item_price: false
})
item.customizations = [{
  _id: 'c2300000000000000000000f',
  label: 'Custom name',
  option: {
    text: 'Jonh Doe'
  },
  add_to_price: {
    type: 'fixed',
    addition: 10
  }
}]
item.quantity = 6
ecomCart.fixItemQnt(item)

 */
