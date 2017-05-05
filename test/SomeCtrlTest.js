/**
 * Test for SomeCtrl.
 * Runs with mocha.
 */
'use strict'

const SomeCtrl = require('../lib/SomeCtrl')
const { ok, equal } = require('assert')

describe('some-ctrl', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', () => {
    let ctrl = new SomeCtrl()
    ok(ctrl)
  })
})

/* global describe, before, after, it */
