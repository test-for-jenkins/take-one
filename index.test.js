let assert = require('assert')
const add = require('./index')

let three = add(1, 2)
assert.equal(three, 3, 'is that equal?')
