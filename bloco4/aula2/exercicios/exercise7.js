//exercise7
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, -1];
    
    let maior =0;
    for (let i=0; i<numbers.length; i += 1){
        if (numbers [i] > maior){
            maior = numbers [i];
        }

}
menor=maior
    for (let i=0; i<numbers.length; i += 1){
        if (numbers [i] < menor){
            menor = numbers [i];
        }

}
console.log(`O menor valor dessa parada é ${menor}`);