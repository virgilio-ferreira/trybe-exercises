//exercicio3

const n = 7;
let m = 0;
let linha = "";


for (let i=0; i<=n; i += 1){
    m=n-i;
    let linha = "";
    // console.log (m);
    // console.log (i);
    for (let j=0;j<m;j += 1){
        linha = linha + " ";
    }
    for (let j=0;j<i;j += 1){
        linha = linha + "*";
    }
  console.log(linha);

}




