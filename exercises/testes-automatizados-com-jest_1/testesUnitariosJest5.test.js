//exercicio5
const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

test('Identicals JSON', () => {
  expect(obj1).toEqual(obj2);
  expect(obj1).not.toEqual(obj3);
  expect(obj3).not.toEqual(obj2);
})