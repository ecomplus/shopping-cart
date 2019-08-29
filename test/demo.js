/* global EcomCart */

const cart = new EcomCart()

cart.addItem({
  _id: '12300000000000000000000f',
  product_id: '123a5432109876543210cdef',
  sku: 's-MP_2B4',
  name: 'Mens Pique Polo Shirt',
  quantity: 4,
  price: 42.9,
  keep_item_price: false
})

cart.increaseItemQnt('12300000000000000000000f', 3)
console.log(cart)
