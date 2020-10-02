/**
 * @method
 * @name EcomCart#addProduct
 * @description Parse product object to item, push to cart and save.
 *
 * @param {object} product -
 * [Product object]{@link https://developers.e-com.plus/docs/api/#/store/products/products}
 * @param {string} [variationId] - ID of selected variation if any
 * @param {number} [quantity=1] - Item quantity added
 * @param {boolean} [canSave=true] - Save cart data
 *
 * @returns {object|null} Returns the saved item object (with `_id`) or null
 * when new item object is invalid.
 *
 * @example

ecomCart.addProduct({
  _id: '123a5432109876543210cdef',
  sku: 's-MP_2B4',
  commodity_type: 'physical',
  name: 'Mens Pique Polo Shirt',
  slug: 'mens-pique-polo-shirt',
  available: true,
  visible: true,
  price: 42.9,
  price_effective_date: {
    end: '2018-12-01T10:00:00.612Z'
  },
  base_price: 60,
  currency_id: 'BRL',
  currency_symbol: 'R$',
  quantity: 100
})

 */

export default ({ addItem, parseProduct }, emitter, [product, variationId, quantity = 1, canSave = true]) => {
  return addItem(parseProduct(product, variationId, quantity), canSave)
}
