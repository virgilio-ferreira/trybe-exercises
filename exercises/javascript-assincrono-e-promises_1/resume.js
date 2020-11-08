let assert = require('assert');

let pushNumber = (list, number) => list.push(number);

let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

assert.deepEqual(numbers, [1, 2, 3]);

// Segundo exemplo
assert = require('assert');

pushNumber = (list, number) => list.push(number);

numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

assert.deepEqual(numbers, [1, 2, 3]); // essa validação falha
// para funcionar faria assim:
assert = require('assert');

list = [];

pushNumber = (list, number) => {
  list.push(number);
  console.log(list);
};

numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => assert.deepEqual(numbers, [2, 3, 1]), 3000);