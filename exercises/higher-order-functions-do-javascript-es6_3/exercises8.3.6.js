//exercicio6

const assert = require("assert");

const alunos = ["Pedro Henrique", "Miguel", "Maria Clara"];
const notas = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

// criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }

// tentaiva frustrada de fazer com forEach
// const averageNotas = (acc, currentGroup) => {
//   console.log(`tipo currentGroup ${typeof currentGroup}`); // ele sai como objeto?
//   currentGroup.forEach((element, index) => {
//     console.log(`tipo element[index]  ${typeof element[index]}`); // Não consigo acessar porque é objeto?
//     acc = acc + element[index];
//     console.log(`acc do foreach ${acc}`);
//   });
// }

const averageNotas = (acc, currentNote, index, array) => {
  if (index === array.length - 1) return (acc + currentNote) / (index + 1);
  // console.log(acc);
  return acc + currentNote;
};
// console.log(notas[0].reduce(averageNotas, 0)); // teste da primeira função

const mapNotas = (student, index) => {
  return ({ name: student, 
  average: (notas[index].reduce(averageNotas, 0)) 
})}; // sem os colchetes não precisa do return, com colchetes precisa do return!

function studentAverage() {
  const nameAndAverage = alunos.map(mapNotas);
  return nameAndAverage;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepEqual(studentAverage(), expected);
