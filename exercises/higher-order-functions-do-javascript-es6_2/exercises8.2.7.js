//exercicio7
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

const expected_result = 'O Senhor dos Anéis';
//Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais (terminam com um ponto).
function authorWith3DotsOnName() {
  let theBook = books.find(books => books.author.name[7] === '.'); // deu undefined antes porque não tinha colocado o author.NAME
  // let theBook = books.forEach((book) => {
  //   if (book.author.name[7] === '.'){
  //     console.log(book);
  //   }
  //   // console.log(book);
  // })
  console.log(theBook);
  // return theBook.map(element => element.author.name); // fica falando que map não é uma função
  // let a = theBook.map((element) => {
  //   return element.name
  // });
  // console.log(a); // fica falando que map não é uma função, parece que é porque quando tem um só ele é um objeto e essas HOF só funcionam com arrays.
  return theBook.name

  
}
// authorWith3DotsOnName()
assert.deepEqual(authorWith3DotsOnName(), expected_result);