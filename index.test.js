let assert = require('assert')
const add = require('./index')

let three = add(1, 2)
assert.equal(three, 4, 'is that equal?')
