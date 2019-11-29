/**
 * Simple JS library to handle shopping cart object and events on E-Com Plus (not only) stores.
 * {@link https://github.com/ecomclub/shopping-cart GitHub}
 * @author E-Com Club <ti@e-com.club>
 * @license MIT
 *
 * @module @ecomplus/shopping-cart
 * @return {ecomCart}
 * @see ecomCart
 * @see EcomCart
 *
 * @example
 * // ES import default
 * import ecomCart from '@ecomplus/shopping-cart'
 *
 * @example
 * // Optional named ES import for default instance and constructor
 * import { ecomCart, EcomCart } from '@ecomplus/shopping-cart'
 *
 * @example
 * // With CommonJS
 * const ecomCart = require('@ecomplus/shopping-cart')
 *
 * @example
 * <!-- Global `ecomCart` from CDN on browser -->
 * <script src="https://cdn.jsdelivr.net/npm/@ecomplus/shopping-cart/dist/ecom-cart.root.min.js"></script>
 *
 * @example
 * <!-- Bundle from CDN with `@ecomplus/utils` and `eventemitter3` -->
 * <script src="https://cdn.jsdelivr.net/npm/@ecomplus/shopping-cart/dist/ecom-cart.bundle.min.js"></script>
 */

import EcomCart from './constructor'

/**
 * Default `EcomCart` instance.
 * @global
 * @type EcomCart
 */

const ecomCart = new EcomCart()

export default ecomCart

export { ecomCart, EcomCart }
