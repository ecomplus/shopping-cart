/**
 * https://github.com/ecomclub/shopping-cart
 * @author E-Com Club <ti@e-com.club>
 * @license MIT
 */

'use strict'

;(function () {
  /**
   * EcomCart object with shopping cart methods.
   * @namespace
   */

  var EcomCart = {
    /** EcomCart.add */
    add: function () {}
  }

  if (typeof window === 'object' && window.document) {
    // on browser
    // set EcomCart object globally
    window.EcomCart = EcomCart
  } else if (module && module.exports) {
    // Node.js
    // return EcomCart object
    module.exports = EcomCart
  }
}())
