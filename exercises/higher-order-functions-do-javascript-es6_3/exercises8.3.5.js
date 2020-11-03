//exercicio5
    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];


// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula
const reduceA = (acumulator, currentString) => {
  let currentArray = currentString.split("");
  console.log(`saida em array ${currentArray}`);
  currentArray.forEach( element => {
    if (element === 'a' || element === 'A') {
      acumulator = acumulator + 1;
      // console.log(`acumulator ${acumulator}`);
    }
  });
  console.log(`acumulator final ${acumulator}`);
  return acumulator; // no final esse reduce serviu pra passar o contador de uma string pra outra.
}



function containsA() {
  return names.reduce(reduceA, 0);
}
// containsA()
assert.deepEqual(containsA(), 20);