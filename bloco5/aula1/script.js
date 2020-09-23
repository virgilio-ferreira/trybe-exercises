// #document no console dá acesso a todo HTML
let titulo = document.getElementById("page-title");
titulo.style.color = "red";

document.getElementById("paragraph").innerText = "mudar o texto dentro de title";
document.getElementById("page-title").innerText = "The godfather";
document.getElementById("second-paragraph").innerText = "Melhor filme"
document.getElementById("second-paragraph").style.backgroundColor = "black";

document.getElementById("subtitle").style.color = "purple";

document.getElementsByClassName("paragrafo")[1].style.color = "purple";

document.getElementsByTagName("h4")[0].style.backgroundColor = "pink"
