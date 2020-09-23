// Teste da colocação de arrays dentro da array 
// Isaac respondeu no slack pq não funiona.
linha [0] = 1
console.log(linha);
quadrado [0]= linha
console.log(quadrado);
console.log("------");

linha [1] = 2
console.log(linha);
quadrado [1]= linha
console.log(quadrado);
console.log("------");

linha [2] = 3
console.log(linha);
quadrado [2]= linha
console.log(quadrado);

// teste do slice
let linha = [1,2,3];

let corte = linha.slice (1,2);
console.log(corte);
console.log(linha);