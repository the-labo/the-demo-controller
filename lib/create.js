/**
 * Create a SomeCtrl instance
 * @function create
 * @param {...*} args
 * @returns {SomeCtrl}
 */
'use strict'

const SomeCtrl = require('./SomeCtrl')

/** @lends create */
function create (...args) {
  return new SomeCtrl(...args)
}

module.exports = create
