/**
 * https://github.com/ecomclub/shopping-cart
 * @author E-Com Club <ti@e-com.club>
 * @license MIT
 */

import { _config } from '@ecomplus/utils'

/**
 * Vanilla JS library to handle shopping cart object on E-Com Plus stores.
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

const _key = 'ecomShoppingCart'
const _storage = typeof window === 'object' && window.localStorage

export default function (storeId, storageKey = _key, localStorage = _storage) {
  const self = this

  /**
   * Respective Store ID number.
   * @name EcomCart#storeId
   * @type {number}
   */
  this.storeId = storeId || _config.get('store_id')

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
  this.data = {}

  if (localStorage && storageKey) {
    // try to preset cart data from storage
    const json = localStorage.getItem(storageKey)
    if (typeof data === 'string') {
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
}

/**
 * Construct a new shopping cart instance object.
 * @class EcomCart
 * @param {number} [storeId=_config.get('store_id')] - Preset Store ID number
 * @param {string|null} [storageKey='ecomShoppingCart'] - Item key to persist search history data
 * @param {object} [localStorage=window.localStorage] -
 * [Local Storage interface]{@link https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage}
 *
 * @example

const cart = new EcomCart()

 *
 * @example

// Defining Store ID other than the configured on `ecomUtils._config`
const storeId = 2000
const cart = new EcomCart(storeId)

 */
