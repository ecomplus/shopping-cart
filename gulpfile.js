'use strict'

const { src, dest, watch } = require('gulp')
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
        '/js': './src'
      }
    },
    port: 3377
  })
  watch([
    './src/**/*.js',
    './tests/index.html'
  ], browserSync.reload)
}

const dist = () => {
  return src([ './src/index.js', './src/methods/*.js' ])
    .pipe(sourcemaps.init())
    .pipe(concat('shopping-cart.js'))
    .pipe(uglify())
    .pipe(rename('shopping-cart.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(dest('./dist'))
}

exports.serve = serve
exports.dist = dist
exports.default = serve
