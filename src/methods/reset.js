import { randomObjectId } from '@ecomplus/utils'

/**
 * @method
 * @name EcomCart#reset
 * @description Reset all cart data and create new random ID.
 *
 * @param {boolean} [canSave=true] - Save new cart to local storage
 *
 * @returns {self}
 *
 * @example

ecomCart.reset()

 */

export default (self, emitter, [canSave = true]) => {
  let { data, save } = self

  data = {
    _id: randomObjectId(),
    items: [],
    subtotal: 0
  }

  /**
   * @event EcomCart#reset
   * @type {object}
   * @property {object} data - Shopping cart data
   * @example ecomCart.on('reset', ({ data }) => { console.log(data._id) })
   */
  emitter.emit('reset', { data })

  if (canSave) {
    save(false)
  }
  return self
}
