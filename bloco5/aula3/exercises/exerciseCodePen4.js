//exercicio4
let caixaTexto = document.querySelector(".caixa-texto");
let caixaUm = document.querySelector(".caixa1");
let caixaDois = document.querySelector(".caixa2");

function trocaCor2 () {
  caixaDois.style.backgroundColor = 'green';
}
function trocaCor1 () {
  caixaUm.style.backgroundColor = 'green';
}
function changeText1 () {
    caixaUm.style.backgroundColor = 'green';
}
function changeText2 () {
    caixaUm.style.backgroundColor = 'green';
}

caixaUm.addEventListener("mouseover", trocaCor1);
caixaDois.addEventListener("mouseover", trocaCor2);

caixaUm.addEventListener("click", changeText1);
caixaDois.addEventListener("click", changeText2);