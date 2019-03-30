/* global EcomCart */

;(function () {
  'use strict'

  /**
   * Add item to cart.
   * @param {object} item - Cart item object
   */

  EcomCart.add = function (newItem) {
    // check required fields
    if (typeof newItem.product_id === 'string' &&
      typeof newItem.quantity === 'number' && newItem.quantity >= 0 &&
      typeof newItem.price === 'number' && newItem.price >= 0) {
      // do the stuf
    } else {
      console.error(new Error('Trying to add invalid item object'))
      return
    }

    for (var i = 0; i < EcomCart.items.length; i++) {
      var item = EcomCart.items[i]
      // check IDs
      if (item.product_id === newItem.product_id && item.variation_id === newItem.variation_id) {
        // same product and variation
        // update quantity and price
        item.quantity += newItem.quantity
        item.price = newItem.price
        return EcomCart.handleItem(item)
      }
    }
  }
}())
