// Exercício 4 da segunda parte do bloco

const assert = require('assert');

function secondThirdSmallest(array) {
	let results = []
	array.sort(function (x, y) {
			return x - y;
	});
	results = [array[1], array[2]];
	return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.deepStrictEqual(secondThirdSmallest(parameter), result);


// depois de procurar na documentação o sort consegue ordenar facilmente
// obortei essa tentaiva abaixo
// function secondThirdSmallest(numbers) {
// 	let results = []
// 	let maior =0;
// 	for (let i=0; i<numbers.length; i += 1){
// 		if (numbers [i] > maior){
// 			maior = numbers [i];
// 		}
// 	}
// 	let menor = [];
// 	menor=maior;
// 	for (let i=0; i<numbers.length; i += 1){
// 		if (numbers [i] < menor){
// 			menor = numbers [i];
// 		}
// 	}

// 	console.log(`O menor valor dessa parada é ${menor}`);
// 	results = [numbers[1], numbers[2]];
// 	console.log(results);
// 	return results;
// };


// const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
// const result = [5, 6];

// secondThirdSmallest(parameter);