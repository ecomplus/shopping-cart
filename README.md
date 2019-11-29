# shopping-cart

[![CodeFactor](https://www.codefactor.io/repository/github/ecomclub/shopping-cart/badge)](https://www.codefactor.io/repository/github/ecomclub/shopping-cart)
[![npm version](https://img.shields.io/npm/v/@ecomplus/shopping-cart.svg)](https://www.npmjs.org/@ecomplus/shopping-cart)
[![license mit](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Simple vanilla JS library to handle shopping cart with
common methods following
[E-Com Plus cart object model](https://developers.e-com.plus/docs/api/#/store/carts/carts)

[Changelog](https://github.com/ecomclub/shopping-cart/blob/master/CHANGELOG.md)

## Usage

The `@ecomplus/shopping-cart` package can be used to persist
and treat shopping cart data on E-Com Plus stores (and not only).

It's available for both Node.js and browser environments.

- [Get started](https://developers.e-com.plus/shopping-cart/module-@ecomplus_shopping-cart.html)
- [Class reference](https://developers.e-com.plus/shopping-cart/EcomCart.html)

### Example

```js
import ecomCart from '@ecomplus/shopping-cart'

ecomCart.on('change', ({ data }) => {
  console.log('Cart was changed!')
  console.log('Current cart data:', data)
})

ecomCart.addItem({
  _id: '12300000000000000000000f',
  product_id: '123a5432109876543210cdef',
  sku: 's-MP_2B4',
  name: 'Mens Pique Polo Shirt',
  quantity: 4,
  price: 42.9,
  keep_item_price: false
})

ecomCart.increaseItemQnt('12300000000000000000000f', 3)
```

### Dependencies

It requires and doesn't include:
- [`@ecomplus/utils`](https://github.com/ecomclub/ecomplus-utils)
- [`eventemitter3`](https://github.com/primus/eventemitter3)

It'll be automatically imported if you're developing on Node.js
environment or using a bundler such as Webpack,
**in other case those libraries must be included manually on
window scope**.
