// exemplo de array.forEach
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

// Vide evernote para ver diversos exemplos mais complexos de forEach
// --------

// exemplo de array.find
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30

// -----
// exemplo de array.some
const listNames = ["Maria", "Manuela", "Jorge", "Ricardo", "Wilson"];

const verifyFirstLetter = (letter, names) => {
  return names.some((name) => name[0] === letter);
};

console.log(verifyFirstLetter("J", listNames)); // true
console.log(verifyFirstLetter("x", listNames)); // false

// um outro exemplo que usa esse true e o false que saem de return do some
const numbers = [2, 4, 6, 8, 12, 14, 16, 17];

// Callback que checa se o número é ímpar
function isOdd(number) {
  return number % 2 !== 0;
}

// Função em que passamos o array numbers como parâmetro. Se houver pelo menos um número ímpar,
// a callback retornará true e a frase "Pelo menos um número é ímpar". Caso contrário, o retorno da callback é false,
// indicando que não há número ímpar no array.
checkIsOdd = (array) => {
  // ifs funcionam com true or false, true entra no if.
  if (array.some(isOdd)) {
    console.log("Pelo menos um número é ímpar");
  } else {
    console.log("Nenhum número é impar");
  }
};

checkIsOdd(numbers);

// -----
// exemplo de array.every
const notes = {
  portugues: "Aprovado",
  matematica: "Reprovado",
  ingles: "Aprovado",
};

const verifyNotes = (studentNotes) => {
  return Object.values(studentNotes).every((note) => note === "Aprovado");
};

console.log(verifyNotes(notes));
// Observe que foi usado Object.values junto com o every.

// -----
// exemplo de array.sort
const food = ["arroz", "feijão", "farofa", "chocolate", "doce de leite"];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

//  Para ordenar de forma numérica crescente, é necessário passar a função a seguir:
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return b - a;
});
console.log(points); // [1, 5, 10, 25, 40, 100]
// colocando b - a inverte a ordem
