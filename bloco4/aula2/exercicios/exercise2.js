//exercise2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0
for (let i=0; i<numbers.length; i += 1){
        resultado = resultado + numbers [i];
}
console.log(resultado);
        
    


// // Interessante: Se eu definir a variavel resultado como array antes a soma da array encaixota os numeros.
// let resultado = []
// for (let i=0; i<numbers.length; i += 1){
//         resultado = resultado + numbers [i];
//         console.log(resultado); // o console.log dentro do for faz ele gerar uma saida para cada vez que roda.
// }
    