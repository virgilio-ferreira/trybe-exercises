//exercise6
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    nDeImpares = 0;
    for (let i=0; i<numbers.length; i += 1){
        if (numbers [i] % 2 !== 0){
            nDeImpares += 1;
        }
    }
        console.log(nDeImpares);