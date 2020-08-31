//exercicio6
const n = 3;

let quadrado = []
let linha = []

for (let i=0; i<n; i += 1){
    for (let j=0; j<n; j += 1){
        if (j<i){
            linha [j] = " "
        }else{
            linha [j] = "*"
        }
    }
}

for (let i=0; i<n; i += 1){
    quadrado[i] = [linha];
}
console.log(quadrado);