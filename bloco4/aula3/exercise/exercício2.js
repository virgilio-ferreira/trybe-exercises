//exercicio2

const n = 5;

let quadrado = []
let linha = []

// for (let i=0; i<n; i += 1){
//     linha[i]= '*';
//     console.log(linha);
// }

// Porque esse debaixo dá erro é um mistério:
for (let i=0; i<n; i += 1){
   linha[i]= '*';
   quadrado[i] = [linha];
}
console.log(quadrado);