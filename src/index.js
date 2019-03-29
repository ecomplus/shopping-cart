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
