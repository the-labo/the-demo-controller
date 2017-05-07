/**
 * Test for SomeCtrl.
 * Runs with mocha.
 */
'use strict'

const SomeCtrl = require('../lib/SomeCtrl')
const theDb = require('the-db')
const { ok, equal } = require('assert')

describe('some-ctrl', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', () => {
    let db = theDb({ dialect: 'memory' })

    let ctrl = new SomeCtrl({
      app: { db },
      session: {}
    })
    ok(ctrl)
  })
})

/* global describe, before, after, it */
