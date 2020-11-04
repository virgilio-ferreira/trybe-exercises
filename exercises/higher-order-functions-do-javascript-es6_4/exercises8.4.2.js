//exercicio2
const assert = require('assert')

const sum = (...arr) => arr.reduce((acc, curr)=> acc+ curr, 0)

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)