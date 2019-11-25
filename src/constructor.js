import { $ecomConfig, randomObjectId } from '@ecomplus/utils'
import EventEmitter from 'eventemitter3'

import addItem from './methods/add-item'
import addPoduct from './methods/add-product'
import increaseItemQnt from './methods/increase-item-qnt'
import removeItem from './methods/remove-item'
import save from './methods/save'
import clear from './methods/clear'

/**
 * Simple JS library to handle shopping cart object on E-Com Plus stores.
 * @module @ecomplus/shopping-cart
 * @see EcomCart
 *
 * @example
 * // ES import
 * import EcomCart from '@ecomplus/shopping-cart'
 *
 * @example
 * // With CommonJS
 * const EcomCart = require('@ecomplus/shopping-cart')
 *
 * @example
 * <!-- Global `EcomCart` from CDN on browser -->
 * <script src="https://cdn.jsdelivr.net/npm/@ecomplus/shopping-cart/dist/ecom-cart.root.min.js"></script>
 */

const defaultKey = 'ecomShoppingCart'
const defaultStorage = typeof window === 'object' && window.localStorage

const EcomCart = function (storeId, storageKey = defaultKey, localStorage = defaultStorage) {
  const self = this

  /**
   * Construct a new shopping cart instance object.
   * @see EcomCart
   * @type {function}
   */
  this.Constructor = EcomCart

  /**
   * Respective Store ID number.
   * @name EcomCart#storeId
   * @type {number}
   */
  this.storeId = storeId || $ecomConfig.get('store_id')

  /**
   * Item key to handle persistent JSON {@link EcomCart#data}
   * with [localStorage]{@link EcomSearch#localStorage}.
   * @name EcomCart#storageKey
   * @type {string|null}
   */
  this.storageKey = storageKey

  /**
   * [Storage interface]{@link https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage}.
   * @name EcomCart#localStorage
   * @type {object}
   */
  this.localStorage = localStorage

  /**
   * Shopping cart data object.
   * @name EcomCart#data
   * @type {array<string>}
   */
  this.data = {
    items: [],
    subtotal: 0
  }

  const emitter = new EventEmitter()
  ;['on', 'off', 'once'].forEach(method => {
    self[method] = (ev, fn) => {
      emitter[method](ev, fn)
    }
  })

  const methodsMiddleware = (method, args = [], emitChange = true) => {
    const result = method(self, emitter, args)
    if (result && emitChange) {
      const { data } = self
      emitter.emit('change', { data })
    }
    return result
  }

  this.addItem = (newItem, canSave) => {
    return methodsMiddleware(addItem, [newItem, canSave])
  }

  this.addProduct = (product, variationId, quantity, canSave) => {
    return methodsMiddleware(addPoduct, [product, variationId, quantity, canSave])
  }

  this.increaseItemQnt = (itemId, quantity, canSave) => {
    return methodsMiddleware(increaseItemQnt, [itemId, quantity, canSave])
  }

  this.removeItem = (itemId, canSave) => {
    return methodsMiddleware(removeItem, [itemId, canSave])
  }

  this.clear = (canSave) => {
    return methodsMiddleware(clear, [canSave])
  }

  this.save = (canFixSubtotal) => {
    return methodsMiddleware(save, [canFixSubtotal], false)
  }

  if (localStorage && storageKey) {
    // try to preset cart data from storage
    const json = localStorage.getItem(storageKey)
    if (json) {
      let data
      try {
        data = JSON.parse(json)
      } catch (e) {
        // ignore invalid JSON
      }
      if (data && Array.isArray(data.items)) {
        self.data = data
      }
    }
  }

  if (!self.data._id) {
    // generate new cart ID
    self.data._id = randomObjectId()
  }
}

export default EcomCart

/**
 * Construct a new shopping cart instance object.
 * @constructor EcomCart
 * @param {number} [storeId=$ecomConfig.get('store_id')] - Preset Store ID number
 * @param {string|null} [storageKey='ecomShoppingCart'] - Item key to persist search history data
 * @param {object} [localStorage=window.localStorage] -
 * [Local Storage interface]{@link https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage}
 *
 * @example

const ecomCart = new EcomCart()

 *
 * @example

// Defining Store ID other than the configured on `ecomUtils._config`
const storeId = 2000
const customEcomCart = new EcomCart(storeId)

 */
