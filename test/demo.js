/* global ecomCart */

ecomCart.on('addItem', ({ data, item }) => {
  console.log(data, item)
})

const customCart = new ecomCart.Constructor()
console.log(customCart)

customCart.addItem({
  _id: '12300000000000000000000f',
  product_id: '123a5432109876543210cdef',
  sku: 's-MP_2B4',
  name: 'Mens Pique Polo Shirt',
  quantity: 4,
  price: 42.9,
  keep_item_price: false
})

customCart.increaseItemQnt('12300000000000000000000f', 3)
