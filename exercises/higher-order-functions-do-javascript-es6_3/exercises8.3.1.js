//exercicio1
    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

// Dada uma matriz de matrizes, transforme em uma única matriz.
function flatten() {
  return arrays.reduce((acc, array) => {
    // a[index] = acc[index]; // primeira questão é como preencher um array vazio
    let a = acc.concat(array);
    console.log(a);
    return a
  }, []);
  
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);