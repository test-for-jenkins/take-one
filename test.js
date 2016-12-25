let assert = require('assert')
const add = require('./index')

let four = add(4, 2)
assert.equal(four, 6, 'is that equal?')
