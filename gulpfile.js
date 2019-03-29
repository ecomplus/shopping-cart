'use strict'

const { src, dest, parallel, watch } = require('gulp')
const browserSync = require('browser-sync').create()
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

const html = () => {
  browserSync.init({
    server: {
      baseDir: './tests',
      routes: {
        '/js': './src'
      }
    },
    port: 3377
  })
  watch([
    './src/index.js',
    './tests/index.html'
  ], browserSync.reload)
}

const js = () => {
  watch('./src/**/*.js', () => {
    // concat partials
  })
}

const dist = () => {
  return src('./src/index.js')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(rename('shipping-cart.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(dest('./dist'))
}

exports.html = html
exports.js = js
exports.dist = dist
exports.default = parallel(html, js)
