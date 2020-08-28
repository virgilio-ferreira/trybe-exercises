//arq1
// O problema do sort com numeros ... ele interpreta como string e coloca numeros com 1 na frente na frente.
console.clear()

let num = [5,9,3,19];
console.log(num);

console.log(num.sort());
console.log(num);

for (let pos in num){
    console.log(num[pos])
}