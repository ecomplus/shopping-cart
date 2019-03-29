'use strict'

const { src, dest, parallel, series, watch } = require('gulp')
const browserSync = require('browser-sync').create()
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const concat = require('gulp-concat')

const serve = () => {
  browserSync.init({
    server: {
      baseDir: './tests',
      routes: {
        '/js': './dist'
      }
    },
    port: 3377
  })
  watch('./src/**/*.js', js)
  watch([
    './src/index.js',
    './tests/index.html'
  ], browserSync.reload)
}

const js = () => {
  return src([ './src/index.js', './src/methods/*.js' ])
    .pipe(sourcemaps.init())
    .pipe(concat('shopping-cart.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(dest('./dist'))
}

const minify = () => {
  return src('./dist/shopping-cart.js')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(rename('shopping-cart.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(dest('./dist'))
}

exports.serve = serve
exports.js = js
exports.minify = minify
exports.dist = series(js, minify)
exports.default = parallel(serve, js)
