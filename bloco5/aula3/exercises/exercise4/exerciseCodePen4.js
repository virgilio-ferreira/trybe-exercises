//exercicio4
let caixaTexto = document.querySelector(".caixa-texto");
let caixaUm = document.querySelector(".caixa1");
let caixaDois = document.querySelector(".caixa2");
let botaoUm = document.querySelector(".botao1");
let botaoDois = document.querySelector(".botao2");

function trocaCor2 () {
  caixaDois.style.backgroundColor = 'green';
}
function trocaCor1 () {
  caixaUm.style.backgroundColor = 'green';
}
function changeColor1() {
    caixaUm.style.backgroundColor = 'blue';
}
function changeColor2 () {
    caixaDois.style.backgroundColor = 'blue';
}
function changeText1() {
  caixaUm.innerText = caixaTexto.value;
}
function changeText2 () {
  // caixaDois.innerText = 'blue';
  caixaDois.innerText = caixaTexto.value;
}
function trocaTexto () {
  caixaDois.innerText = caixaTexto.value;
  alert("Despacito ...");
}

caixaUm.addEventListener("mouseover", trocaCor1);
caixaDois.addEventListener("mouseover", trocaCor2);

caixaUm.addEventListener("click", changeColor1);
caixaDois.addEventListener("click", changeColor2);

botaoUm.addEventListener("click", changeText1);
botaoDois.addEventListener("click", changeText2);

caixaTexto.addEventListener("keyup",trocaTexto);
