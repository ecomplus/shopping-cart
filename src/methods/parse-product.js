import { price } from '@ecomplus/utils'

/**
 * @method
 * @name EcomCart#parseProduct
 * @description Parse product object to cart item object.
 *
 * @param {object} product -
 * [Product object]{@link https://developers.e-com.plus/docs/api/#/store/products/products}
 * @param {string} [variationId] - ID of selected variation if any
 * @param {number} [quantity=1] - Item quantity added
 *
 * @returns {object|null} Returns the parsed item object (with `_id`) or null
 * when product object is invalid.
 *
 * @example

const item = ecomCart.parseProduct({
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

export default ({ addItem }, emitter, [product, variationId, quantity = 1]) => {
  const item = Object.assign({}, product)
  if (variationId && product.variations) {
    Object.assign(item, product.variations.find(({ _id }) => _id === variationId))
    delete item.variations
  }
  item.product_id = product._id

  if (variationId) {
    item.variation_id = variationId
    item.slug = product.slug
    if (item.picture_id && product.pictures) {
      const pictures = product.pictures.filter(picture => {
        return picture._id === item.picture_id
      })
      if (pictures.length) {
        item.picture = pictures[0]
      }
    }
  }

  if (!item.picture && product.pictures) {
    item.picture = product.pictures[0]
  }
  item.max_quantity = item.quantity || product.quantity
  const minQuantity = item.min_quantity || product.min_quantity
  item.quantity = minQuantity > 0 ? Math.max(minQuantity, quantity) : quantity
  item.price = price(item) || price(product)

  return item
}
