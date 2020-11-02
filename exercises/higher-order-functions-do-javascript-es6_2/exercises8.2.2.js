//exercicio2
const assert = require("assert");

const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expected_result = [
  {
    age: 31,
    author: "Isaac Asimov",
  },
  {
    age: 38,
    author: "H. P. Lovecraft",
  },
  {
    age: 39,
    author: "Stephen King",
  },
  {
    age: 43,
    author: "George R. R. Martin",
  },
  {
    age: 45,
    author: "Frank Herbert",
  },
  {
    age: 62,
    author: "J. R. R. Tolkien",
  },
];
// Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author,
// com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado.
// O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
function nameAndAge() {
    let arrayAuthorAndAge;
    arrayAuthorAndAge = books.map((element) => {
    //console.log(element.releaseYear);
    //console.log(element.author.birthYear);
    let releaseAge = element.releaseYear - element.author.birthYear;
    let authorName = element.author.name;
    return { age: releaseAge, author: authorName };
    // arrayAuthorAndAge.push = { age: releaseAge, author: authorName };
    // console.log(arrayAuthorAndAge); // estava tentando fazer com forEach e não estava dando certo.
  });
//   console.log(arrayAuthorAndAge);

  let answer = arrayAuthorAndAge.sort((a,b) => {
    // console.log(a.age, b.age);
    return a.age - b.age;
  })
//   console.log(answer);
return answer;

//   booksOrder = books.sort((a,b) => {
//     console.log(a.releaseYear, b.releaseYear);
//     return b.releaseYear - a.releaseYear;
//   })
//   console.log(booksOrder);

//   arrayAuthorAndAge.sort((a, b) => {
//     return a.age - b.age;
//   });
//   console.log(arrayAuthorAndAge);
}

assert.deepEqual(nameAndAge(), expected_result);
