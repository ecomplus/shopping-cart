/* global EcomCart */

;(function () {
  'use strict'

  /**
   * Remove item from cart.
   * @param {string} itemId - The object ID of item to be removed
   * @returns {boolean} True if the item was found and removed
   */

  EcomCart.removeItem = function (itemId) {
    // find respective item on list by ID
    for (var i = 0; i < EcomCart.cart.items.length; i++) {
      if (EcomCart.cart.items[i]._id === itemId) {
        // item found
        // remove from items array
        EcomCart.cart.items.splice(i, 1)
        EcomCart.saveCart()
        return true
      }
    }
    return false
  }
}())
