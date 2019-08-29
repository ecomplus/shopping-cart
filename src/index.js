/**
 * https://github.com/ecomclub/shopping-cart
 * @author E-Com Club <ti@e-com.club>
 * @license MIT
 */

import { _config } from '@ecomplus/utils'

/**
 * JS lib to handle products search with E-Com Plus stores.
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
  /**
   * Respective Store ID number.
   * @name EcomCart#storeId
   * @type {number}
   */
  this.storeId = storeId || _config.get('store_id')
}
