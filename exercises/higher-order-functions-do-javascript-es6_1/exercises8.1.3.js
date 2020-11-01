//exercicio3
const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expected_result = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin'
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991
};

// function getNamedBook() {
// 	let namebook;
// 	const findBook = (element) => {
// 		let nameLength = element.name.length;
// 		if (nameLength === 26){
// 			namebook = element;
// 			// console.log(element);
// 		}
// 	}
// 	books.forEach(findBook);
// 	// console.log(namebook);
//   return namebook;
// }

// assert.deepEqual(getNamedBook(), expected_result); // se quiser usar com forEach

function getNamedBookFind() {
	// let book26Characters;
	// books.find((element) => {
	// 	if(element.name.length === 26){
	// 		book26Characters = element;
	// 	}
	// })
	// return book26Characters; // versão expandida
	return books.find(element => element.name.length === 26) // versão enxuta
}

assert.deepEqual(getNamedBookFind(), expected_result);