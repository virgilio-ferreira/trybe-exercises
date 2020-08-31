//exercicio1

const n = 3;
let quadrado = []
let linha = []
for (let i=0; i<n; i += 1){
    linha[i]= '*';
}
for (let i=0; i<n; i += 1){
    quadrado[i] = [linha];
}
console.log(quadrado);
