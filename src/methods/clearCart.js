/* global EcomCart */

;(function () {
  'use strict'

  /**
   * Remove all items from cart.
   */

  EcomCart.clearCart = function () {
    // empty the items array and save
    EcomCart.items = []
    EcomCart.saveCart()
  }
}())
