/* global EcomCart */

;(function () {
  'use strict'

  /**
   * Increase quantity of specific item by ID.
   * @param {string} itemId - The unique object ID of item
   * @param {integer} qnt - Quantity to increase
   * @returns {boolean} True if the item was found
   */

  EcomCart.increaseItemQnt = function (itemId, qnt) {
    // find respective item on list by ID
    for (var i = 0; i < EcomCart.cart.items.length; i++) {
      var item = EcomCart.cart.items[i]
      if (item._id === itemId) {
        // item found
        item.quantity += qnt
        // fix new quantity if needed and save cart object
        EcomCart.handleItem(item)
        return true
      }
    }
    return false
  }
}())
