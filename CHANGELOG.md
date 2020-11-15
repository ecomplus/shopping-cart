# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.5.2](https://github.com/ecomplus/shopping-cart/compare/v2.5.1...v2.5.2) (2020-11-15)


### Bug Fixes

* **add-item:** duplicate items from when composing kit units ([d34b06e](https://github.com/ecomplus/shopping-cart/commit/d34b06ec37912bc4a3a00a7ab202b126e3d405a7))
* **remove-item:** properly decreasing respective kit items quantity ([d5b88d5](https://github.com/ecomplus/shopping-cart/commit/d5b88d54ff9376465e10a9fa9b3f95804e3bb53d))

### [2.5.1](https://github.com/ecomplus/shopping-cart/compare/v2.5.0...v2.5.1) (2020-11-14)


### Bug Fixes

* **remove-item:** check kit product composition to prevent removing all items ([2cd461b](https://github.com/ecomplus/shopping-cart/commit/2cd461b53ab3e73ed5f145caacf6a0d29109cdb2))

## [2.5.0](https://github.com/ecomplus/shopping-cart/compare/v2.4.1...v2.5.0) (2020-11-12)


### Features

* **remove-item:** should also remove same kit items ([0c1ac0d](https://github.com/ecomplus/shopping-cart/commit/0c1ac0d57e648baad99a1a495109839925204fe9))

### [2.4.1](https://github.com/ecomplus/shopping-cart/compare/v2.4.0...v2.4.1) (2020-11-11)


### Bug Fixes

* **add-item:** 'canSave' defaults to true (as documented) ([9a31751](https://github.com/ecomplus/shopping-cart/commit/9a31751bbf487965a45e777cf28f2f8096958f29))

## [2.4.0](https://github.com/ecomplus/shopping-cart/compare/v2.3.1...v2.4.0) (2020-11-11)


### Features

* **kit-product:** handle add item with kit parent and fix final price ([6234abb](https://github.com/ecomplus/shopping-cart/commit/6234abb1e12092979fa5a379fdae500da514bcff))


### Bug Fixes

* **deps:** update all non-major dependencies ([2558f2c](https://github.com/ecomplus/shopping-cart/commit/2558f2ce6e744d0192b325bcf9d32f33e14df00e))

### [2.3.1](https://github.com/ecomplus/shopping-cart/compare/v2.3.0...v2.3.1) (2020-10-25)


### Bug Fixes

* **add-item:** when checking current items, skip those with customizations ([ad2d8d1](https://github.com/ecomplus/shopping-cart/commit/ad2d8d19ab7b32daf0ab6fe31889f513d1fc97ac))
* **increase-item-qnt:** do not change item final price, quantity only ([6072131](https://github.com/ecomplus/shopping-cart/commit/6072131e00b0f1281e690187a867045694b8c6a9))
* **item-final-price:** preset as item price ([46817e0](https://github.com/ecomplus/shopping-cart/commit/46817e06ea37aa713a720c4d278458e65e6ecd81))

## [2.3.0](https://github.com/ecomplus/shopping-cart/compare/v2.2.0...v2.3.0) (2020-10-25)


### Features

* **method:** add new 'fixItem' method ([bf66b4c](https://github.com/ecomplus/shopping-cart/commit/bf66b4c16eecee590a98ea6b4bba58276d16f534))


### Bug Fixes

* **final-price:** consider percentage default type for additions ([2ef93a4](https://github.com/ecomplus/shopping-cart/commit/2ef93a4986828ea83b47fe1363a4a7e76b10ab57))
* **handle-item:** internal fix item final price with customization additionals ([0f59647](https://github.com/ecomplus/shopping-cart/commit/0f59647d120787e15f8c91f0f150513534c1dda7))

## [2.2.0](https://github.com/ecomplus/shopping-cart/compare/v2.1.7...v2.2.0) (2020-10-02)


### Features

* **parse-product:** add new 'parseProduct' method ([f99f7a6](https://github.com/ecomplus/shopping-cart/commit/f99f7a642927e1f49527278d404bca0d49784b8e))

### [2.1.7](https://github.com/ecomplus/shopping-cart/compare/v2.1.6...v2.1.7) (2020-08-18)


### Bug Fixes

* **add-product:** fix handling max/min quantities ([07e5f80](https://github.com/ecomplus/shopping-cart/commit/07e5f80e75f5a5ff3bd9ff46052175a8b3577a25))

### [2.1.6](https://github.com/ecomplus/shopping-cart/compare/v2.1.5...v2.1.6) (2020-08-12)


### Bug Fixes

* **add-product:** merge product with variation properties ([ca586bd](https://github.com/ecomplus/shopping-cart/commit/ca586bdd779a9b0eb1c3f1f218b3b088d70d2359))

### [2.1.5](https://github.com/ecomplus/shopping-cart/compare/v2.1.4...v2.1.5) (2020-07-02)


### Bug Fixes

* **add-product:** prevent overwriting original product object ([5647d75](https://github.com/ecomplus/shopping-cart/commit/5647d7585832fb2cc0be441a0b40e19763090c20))

### [2.1.4](https://github.com/ecomplus/shopping-cart/compare/v2.1.3...v2.1.4) (2020-07-02)


### Bug Fixes

* **add-product:** parse product quantity to item max quantity ([b414537](https://github.com/ecomplus/shopping-cart/commit/b414537d80e70720f79da6b02a4ceb4dedfc560a))

### [2.1.3](https://github.com/ecomplus/shopping-cart/compare/v2.1.2...v2.1.3) (2020-06-30)


### Bug Fixes

* **add-item:** prevent changing original item object (param) ([c78fa77](https://github.com/ecomplus/shopping-cart/commit/c78fa7753eb2dc6ad98a41e80f94e382e14fb264))

### [2.1.2](https://github.com/ecomclub/shopping-cart/compare/v2.1.1...v2.1.2) (2020-06-29)


### Bug Fixes

* **add-item:** check if new item id not equal to variation id ([483b580](https://github.com/ecomclub/shopping-cart/commit/483b5802a1909f55beb10671034d7866f7e43129))

### [2.1.1](https://github.com/ecomclub/shopping-cart/compare/v2.1.0...v2.1.1) (2020-01-25)


### Bug Fixes

* **reset:** fix reseting self.data (by reference) ([548de25](https://github.com/ecomclub/shopping-cart/commit/548de25f7605374c220d897d2b1cdf699a76ea03))

## [2.1.0](https://github.com/ecomclub/shopping-cart/compare/v2.0.2...v2.1.0) (2020-01-25)


### Features

* **reset:** add new 'reset' method ([09807ca](https://github.com/ecomclub/shopping-cart/commit/09807ca36232987f8cb0b359fde4ab0d0c20338e))

### [2.0.2](https://github.com/ecomclub/shopping-cart/compare/v2.0.1...v2.0.2) (2020-01-07)

### [2.0.1](https://github.com/ecomclub/shopping-cart/compare/v2.0.0...v2.0.1) (2020-01-02)

## [2.0.0](https://github.com/ecomclub/shopping-cart/compare/v1.0.0...v2.0.0) (2019-12-26)


### ⚠ BREAKING CHANGES

* **deps:** ecomplus/utils and core-js no more direct dependencies

* **deps:** fix pkg dependencies (peer) ([4675931](https://github.com/ecomclub/shopping-cart/commit/46759313b22d165dde3cd4943c1e65b0efc4d900))

## [1.0.0](https://github.com/ecomclub/shopping-cart/compare/v0.6.3...v1.0.0) (2019-11-29)


### ⚠ BREAKING CHANGES

* **constructor:** changed default object exported

### Bug Fixes

* **import:** 'import * as EventEmitter' (no default export) ([ed88be5](https://github.com/ecomclub/shopping-cart/commit/ed88be5d855df2dd64a24b52d0d56409908e79cc))
* **methods:** fix methods params to support middleware (default events) ([93f8d34](https://github.com/ecomclub/shopping-cart/commit/93f8d342dfa23350f583928133016c1803a34b08))


* **constructor:** export an instance with .Constructor for new ones ([2bf6386](https://github.com/ecomclub/shopping-cart/commit/2bf6386f8554a1a02d992628aa37ce633716c5bf))

### [0.6.3](https://github.com/ecomclub/shopping-cart/compare/v0.6.2...v0.6.3) (2019-11-17)

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
