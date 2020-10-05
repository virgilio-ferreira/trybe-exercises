// Exercício 2 da segunda parte do bloco

const assert = require('assert');

const removeVowels = (word) => {
    const characters = word.split('');
    let results = [];
    let contador = 1;
  
    for (let i = 0; i < characters.length; i += 1) {
      if (
        characters[i] === 'a' ||
        characters[i] === 'o' ||
        characters[i] === 'i' ||
        characters[i] === 'e' ||
        characters[i] === 'u'
      ) {
        // results = results + `${i}`; // resulto incorreto mais muito mais interessantes, retorna: 'D1y3n5'
        results = results + `${contador}`;
        contador = contador + 1;
      } else {
        results = results + `${characters[i]}`;
      }
    }
    return results;
  };
  
  const parameter = 'Dayane';
  const result = 'D1y2n3';

  assert.deepStrictEqual(removeVowels(parameter), result);
