/* global EcomCart */
/* global localStorage */

;(function () {
  'use strict'

  if (typeof localStorage === 'object' && localStorage) {
    // try to load stored cart object
    var json = localStorage.getItem('cart')
    try {
      var cart = JSON.parse(json)
      if (typeof cart === 'object' && cart !== null && Array.isArray(cart.items)) {
        cart.items.forEach(function (item) {
          EcomCart.addItem(item)
        })
      }
    } catch (err) {
      // ignore invalid cart JSON
    }
  }
}())
