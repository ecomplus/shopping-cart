/**
 * https://github.com/ecomclub/shopping-cart
 * @author E-Com Club <ti@e-com.club>
 * @license MIT
 */

/**
 * EcomCart object with shopping cart methods.
 * @namespace
 */

var EcomCart = {}

;(function () {
  'use strict'

  /**
   * Current cart object.
   * @type {object}
   * @see {@link https://developers.e-com.plus/docs/api/#/store/carts/carts|Object model}
   */
  EcomCart.cart = {
    subtotal: 0,
    items: []
  }

  /**
   * List of cart items.
   * @type {array.<object>}
   */
  EcomCart.items = EcomCart.cart.items

  // use browser local storage if available
  var db = window && window.localStorage
  // try to load stored cart object
  if (db) {
    var json = db.getItem('cart')
    try {
      var cart = JSON.parse(json)
      EcomCart.cart = cart
    } catch (err) {
      // ignore invalid cart JSON
    }
  }

  /**
   * Save cart object to browser localStorage.
   */
  EcomCart.saveCart = function () {
    if (db) {
      db.setItem('cart', JSON.stringify(EcomCart.cart))
    }
  }

  /**
   * Check item quantity, update subtotal and save new cart object.
   * @param {object} item - Cart item object
   */
  EcomCart.handleItem = function (item) {
    EcomCart.saveCart()
  }

  if (typeof window === 'object') {
    // on browser
    // set EcomCart object globally
    window.EcomCart = EcomCart
  } else if (module && module.exports) {
    /**
     * Exports EcomCart object.
     * @module @ecomplus/shopping-cart
     * @returns {object} {@link EcomCart}
     */
    module.exports = EcomCart
  }
}())

/* global EcomCart */

(function () {
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
        // update quantity
        item.quantity += newItem.quantity
        return EcomCart.handleItem(item)
      }
    }
  }
}())

//# sourceMappingURL=shopping-cart.js.map
