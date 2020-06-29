# Shopping Cart

[![Publish](https://github.com/ecomplus/shopping-cart/workflows/Publish/badge.svg)](https://github.com/ecomplus/shopping-cart/actions?workflow=Publish) [![CodeFactor](https://www.codefactor.io/repository/github/ecomplus/shopping-cart/badge)](https://www.codefactor.io/repository/github/ecomplus/shopping-cart) [![npm version](https://img.shields.io/npm/v/@ecomplus/shopping-cart.svg)](https://www.npmjs.org/@ecomplus/shopping-cart) [![license mit](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Simple vanilla JS library to handle shopping cart with common methods following [E-Com Plus cart object model](https://developers.e-com.plus/docs/api/#/store/carts/carts)

[CHANGELOG](https://github.com/ecomplus/shopping-cart/blob/master/CHANGELOG.md)

## Usage

The `@ecomplus/shopping-cart` package can be used to persist and treat shopping cart data on E-Com Plus stores (and not only).

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

### Installation

It _may_ require and doesn't include `core-js` (optional) and [`@ecomplus/utils`](https://developers.e-com.plus/utils/) (peer dependency).

#### Webpack

```bash
npm i --save core-js @ecomplus/utils @ecomplus/shopping-cart
```

#### Node.js

```bash
npm i --save @ecomplus/utils @ecomplus/shopping-cart
```

#### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@ecomplus/shopping-cart/dist/ecom-cart.var.min.js"></script>
```

When importing from CDN, `EventEmitter3` and `ecomUtils` libraries **must be included separately** and available on window scope.
