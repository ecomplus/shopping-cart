# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.6.2](https://github.com/ecomclub/shopping-cart/compare/v0.6.1...v0.6.2) (2019-09-12)


### Bug Fixes

* **remove-item:** fix event and self.save() on removeItem method ([59d1e3f](https://github.com/ecomclub/shopping-cart/commit/59d1e3f))

### [0.6.1](https://github.com/ecomclub/shopping-cart/compare/v0.6.1-alpha.0...v0.6.1) (2019-08-29)


### Bug Fixes

* **add-item:** fix handling 'addItem' (save) ([9ee9ef9](https://github.com/ecomclub/shopping-cart/commit/9ee9ef9))
* **constructor:** add each item one by one to fix it if needed ([874b000](https://github.com/ecomclub/shopping-cart/commit/874b000))
* **constructor:** fix constructor setup and some methods ([e64998a](https://github.com/ecomclub/shopping-cart/commit/e64998a))
* **constructor:** setup methods with args correctly ([8ae9f53](https://github.com/ecomclub/shopping-cart/commit/8ae9f53))
* **emitter:** emit constructor events on methods (.emit) ([4f9f196](https://github.com/ecomclub/shopping-cart/commit/4f9f196))
* **methods:** handling instance cart object with 'data' ([ec856b5](https://github.com/ecomclub/shopping-cart/commit/ec856b5))


### Features

* **add-item:** handling addItem method ([e8a09af](https://github.com/ecomclub/shopping-cart/commit/e8a09af))
* **add-product:** implement 'addProduct' method ([3ab6636](https://github.com/ecomclub/shopping-cart/commit/3ab6636))
* **clear:** add 'clear' method ([7752491](https://github.com/ecomclub/shopping-cart/commit/7752491))
* **emitter:** add events emmiter to constructor ([6f01886](https://github.com/ecomclub/shopping-cart/commit/6f01886))
* **emitter:** emit constructor events on methods ([1cde35f](https://github.com/ecomclub/shopping-cart/commit/1cde35f))
* **increase-item-qnt:** handle 'increaseItemQnt' method ([764c007](https://github.com/ecomclub/shopping-cart/commit/764c007))
* **remove-item:** handle 'removeItem' method ([03551f1](https://github.com/ecomclub/shopping-cart/commit/03551f1))
* **save:** add 'save' method ([26206b9](https://github.com/ecomclub/shopping-cart/commit/26206b9))
* **storage:** try to preset cart data from storage ([eea39e1](https://github.com/ecomclub/shopping-cart/commit/eea39e1))

### [0.6.1-alpha.0](https://github.com/ecomclub/shopping-cart/compare/v0.3.0...v0.6.1-alpha.0) (2019-08-29)


### Bug Fixes

* handle export even if window object is available ([3c3372f](https://github.com/ecomclub/shopping-cart/commit/3c3372f))
* prevent fatal error with undefined module ([36f4474](https://github.com/ecomclub/shopping-cart/commit/36f4474))
