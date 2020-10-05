// exercicio 2 do segundo bloco

const assert = require('assert');
// escreva a função wordLengths aqui
function wordLengths (array) {
	let word = '';
	let result = [];
	for (let i = 0; i < array.length; i += 1) {
		word = array[i]
		let sizeWord = 0;
		for (let j = 0; j < word.length; j += 1) {
			sizeWord = sizeWord + 1;
		}
		result[i] = sizeWord;
	}
	return result
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
