// script do form 


let states = [
    'São Paulo',
    'Rio de Janeiro',
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'
];
let selectBox = document.getElementById("selectBoxStates");

for (let i=0; i<states.length; i += 1) {
    let optionState = document.createElement("option");
    optionState.innerHTML = "<option>" + states[i] + "</option>";//não tenho certeza de porque é feito assim
    selectBox.appendChild(optionState);
    optionState.classList.add('stateListItem');
    //pode colocar aqui um outro for pra colocar cada UF em cada value.
}






