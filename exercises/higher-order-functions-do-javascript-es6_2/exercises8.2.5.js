//exercicio5
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

const expected_result = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien'
]
//Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
function fantasyOrScienceFictionAuthors() {
// ------ Assim é tentando fazer com forEach, fiquei confuso com o uso do push aqui pra fazer um array, rever essa parte.
//   let selectedAuthors = books.forEach((books) => {
//     if (books => books.genre === 'Ficção Científica' || books.genre === 'Fantasia') {
//        let selected = books.author.push;
//         console.log(selected);
//     }
//   })

  // // ------- Assim é mais devagar
  let selectedBooks = books.filter(books => books.genre === 'Ficção Científica' || books.genre === 'Fantasia');
  // console.log(selectedBooks);
  // let selectedAuthors = selectedBooks.map(element => {element.author.name}); // assim dá [undefined, undefined, undefined, undefined,] acho que é porque quando coloca as chaves tem que colocar o return!
  let selectedAuthors = selectedBooks.map(element => element.author.name); 
  let orderedAuthors = selectedAuthors.sort();

  // ------- Assim é tentando fazer direto mas não deu certo
  // let selectedAuthors;
  // const orderedAuthors = books.map((books) => {
  //   if (books.genre === 'Ficção Científica' || books.genre === 'Fantasia') {
  //     selectedAuthors = books.author.name;
  //   }
  //   console.log(selectedAuthors);
  //   return selectedAuthors.sort();
  // })
  // --- Assim também não dá certo!
  // let orderedAuthors = selectedBooks.map((element) => {
  //   let selectedAuthors = element.author.name;
  //   return selectedAuthors.sort()
  // }); 
  
  console.log(orderedAuthors);
  return orderedAuthors
}
// fantasyOrScienceFictionAuthors()

assert.deepEqual(fantasyOrScienceFictionAuthors(), expected_result);