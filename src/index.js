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

  /**
   * Save cart object to browser localStorage.
   */
  EcomCart.saveCart = function () {
    /* global localStorage */
    if (typeof localStorage === 'object' && localStorage) {
      localStorage.setItem('cart', JSON.stringify(EcomCart.cart))
    }
  }

  /**
   * Check item quantity, update subtotal and save new cart object.
   * @param {object} item - Cart item object
   */
  EcomCart.handleItem = function (item) {
    // fix item quantity if needed
    if (item.min_quantity && item.quantity < item.min_quantity) {
      item.quantity = item.min_quantity
    } else if (item.max_quantity && item.quantity > item.max_quantity) {
      item.quantity = item.max_quantity
    }
    // sum item price to current cart subtotal value
    EcomCart.cart.subtotal += item.quantity * (item.final_price || item.price)
    EcomCart.saveCart()

    if (!item._id) {
      // generate random ObjectID
      // 24 chars hexadecimal string
      item._id = '1234'
      var hexa = '0123456789abcdef'
      for (var i = item._id.length; i < 24; i++) {
        item._id += hexa.charAt(Math.floor(Math.random() * hexa.length))
      }
    }
    return item._id
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

// require('methods/*')
// require('reload')
