// exercicio 3 do segundo bloco

const assert = require('assert');
// escreva a função addAllnumbers aqui

function addAllnumbers (array) {
	let resultado = 0;
	for (let i=0; i<array.length; i +=1) {
		resultado = resultado + array[i];
	}
	return resultado;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);

