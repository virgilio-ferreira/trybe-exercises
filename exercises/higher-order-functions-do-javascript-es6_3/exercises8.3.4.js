//exercicio4
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

// Encontre o livro com o maior nome.
const reduceLongestNamedBook = (biggestBook, currentBook, i ,array) => {
  // console.log(`book antes ${currentBook.name}`);
  // console.log(`acc antes ${biggestBook.name.length}`);
  // console.log(`tamanho do nome antes ${currentBook.name.length}`); // pra ver oq estava acontecendo
  if (currentBook.name.length > biggestBook.name.length) { // mas o pulo do gato foi aqui ao não colocar uma variavel com o tamanho, apenas a informação direto
    console.log(`book no if ${currentBook}`);
    return currentBook;
  }
  return biggestBook;
}

function longestNamedBook() {
  // console.log(books.reduce(reduceLongestNamedBook));
  return books.reduce(reduceLongestNamedBook);
}
// longestNamedBook()
assert.deepEqual(longestNamedBook(), expected_result);