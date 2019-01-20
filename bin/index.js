#!/usr/bin/env node

require('babel-polyfill')
var babelRegister = require('babel-register')
babelRegister({
  presets: [require('babel-preset-env'),require('babel-preset-stage-0')],
  extensions: '.js',
  cache:false
})
require("../src/index")