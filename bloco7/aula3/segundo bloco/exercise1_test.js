// Exercício 1 da segunda parte do bloco

const assert = require('assert');

const greetPeople = (people) => {
		let greeting = 'Hello ';
		let result = [];
		for (let i = 0; i < people.length; i += 1) {
			result[i] = greeting + people[i];
	}
    return result;
  };
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

  assert.deepStrictEqual(greetPeople(parameter), result);