'use strict'

const { SomeCtrl } = require('the-demo-controller')
const theServer = require('the-server')

async function tryExample () {
  let server = theServer({ /* ... */ })

  server.register(
    class extends SomeCtrl { /* ... */},
    'some'
  )

  server.listen(3000)
}

tryExample().catch((err) => console.error(err))
