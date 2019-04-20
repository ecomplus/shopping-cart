/* global EcomCart */

;(function () {
  'use strict'

  /**
   * Add item to cart.
   * @param {object} newItem - New cart item object
   * @returns {string|null} Returns the item ID or null when object is invalid
   */

  EcomCart.addItem = function (newItem) {
    // check required fields
    if (typeof newItem.product_id === 'string' &&
      typeof newItem.quantity === 'number' && newItem.quantity >= 0 &&
      typeof newItem.price === 'number' && newItem.price >= 0) {
      // do the stuf
    } else {
      console.error(new Error('Trying to add invalid item object'))
      return null
    }

    for (var i = 0; i < EcomCart.cart.items.length; i++) {
      var item = EcomCart.cart.items[i]
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
        return EcomCart.handleItem(item)
      }
    }

    // add item to cart
    EcomCart.cart.items.push(newItem)
    return EcomCart.handleItem(newItem)
  }
}())
