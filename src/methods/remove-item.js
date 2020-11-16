import fixSubtotal from './../lib/fix-subtotal'

/**
 * @method
 * @name EcomCart#removeItem
 * @description Remove specific item from cart by ID.
 *
 * @param {string} itemId - The unique object ID of item
 * @param {boolean} [canSave=true] - Save cart data
 *
 * @returns {object|null} Returns the removed item object or null
 * when item not found.
 *
 * @example

ecomCart.removeItem('12300000000000000000000f')

 */

export default ({ increaseItemQnt, data, save }, emitter, [itemId, canSave = true]) => {
  for (let i = 0; i < data.items.length; i++) {
    const item = data.items[i]
    if (item._id === itemId) {
      const removedItems = data.items.splice(i, 1)

      if (item.kit_product) {
        const kitProductId = item.kit_product._id
        let i = 0
        while (i < data.items.length) {
          const item = data.items[i]
          if (item.kit_product && item.kit_product._id === kitProductId) {
            const { composition } = item.kit_product
            if (Array.isArray(composition)) {
              const kitItemIndex = composition.findIndex(kitItem => {
                return kitItem._id === item.product_id &&
                  kitItem.variation_id === item.variation_id &&
                  kitItem.quantity === item.quantity
              })
              if (kitItemIndex === -1) {
                i++
                continue
              }
              composition.splice(kitItemIndex, 1)
            }
            removedItems.push(item)
            data.items.splice(i, 1)
          } else {
            i++
          }
        }
      }

      fixSubtotal(data)

      /**
       * @event EcomCart#removeItem
       * @type {object}
       * @property {object} data - Shopping cart data
       * @property {object} item - Cart item removed
       * @example ecomCart.on('removeItem', ({ data, item }) => { console.log(data, item) })
       */
      removedItems.forEach(item => {
        emitter.emit('removeItem', { data, item })
      })

      if (canSave) {
        save(false)
      }
      return item
    }
  }

  return null
}
