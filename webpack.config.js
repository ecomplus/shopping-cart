'use strict'

const devMode = process.env.NODE_ENV !== 'production'
const path = require('path')

// preset default output object
const output = {
  library: 'ecomCart',
  libraryTarget: 'umd',
  libraryExport: 'default',
  path: path.resolve(__dirname, 'dist'),
  filename: 'ecom-cart.min.js',
  globalObject: 'this'
}

// base Webpack config
const config = {
  mode: devMode ? 'development' : 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  output,
  devServer: {
    contentBase: path.resolve(__dirname, 'test'),
    compress: true,
    port: 9103,
    open: true
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  externals: devMode ? '' : /^(@babel\/runtime|core-js|@ecomplus\/(utils|client)|eventemitter3)/
}

module.exports = devMode
  // single config object for dev server
  ? config

  // multiple production outputs
  : [
    // without dependencies/polyfill
    config,

    // without dependencies but with polyfill
    {
      ...config,
      output: {
        ...output,
        filename: output.filename.replace('.min.js', '.root.min.js')
      },
      externals: {
        eventemitter3: {
          commonjs: 'eventemitter3',
          commonjs2: 'eventemitter3',
          root: 'EventEmitter3'
        },
        '@ecomplus/utils': {
          commonjs: '@ecomplus/utils',
          commonjs2: '@ecomplus/utils',
          root: 'ecomUtils'
        },
        '@ecomplus/client': {
          commonjs: '@ecomplus/client',
          commonjs2: '@ecomplus/client',
          root: 'ecomClient'
        }
      }
    },

    // full bundle with polyfill and dependencies
    {
      ...config,
      output: {
        ...output,
        filename: output.filename.replace('.min.js', '.bundle.min.js')
      },
      externals: ''
    }
  ]
