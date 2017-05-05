/**
 * Demo of the-controllers
 * @module the-demo-controller
 */
'use strict'

const SomeCtrl = require('./SomeCtrl')
const create = require('./create')

const lib = create.bind(this)

Object.assign(lib, {
  SomeCtrl,
  create
})

module.exports = lib
