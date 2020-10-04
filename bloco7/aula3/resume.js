// resumo da aula 3

// "carregando" o assert
const assert = require("assert");

// typeof(sumationOf) === "function" que 'o primeiro passo mais básico de todos. se a função existe.
// typeof é uma função que vẽ qual tipo primitivo é a parada
assert.strictEqual(typeof(sumationOf), "function")
// O minimo para passar nesse teste é ser uma função. ela pode ser em branco, logo:
const summationOf = () => {
}

// proximo passo faz outro teste.
assert.strictEqual(summationOf(1), 1);
const summationOf = () => {
    return 1; // é roubado mas é o minimo pra passar no teste.
}

// proximo passo faz outro teste.
assert.strictEqual(summationOf(3), 6);
const summationOf = (number) => {
    let summation = null;
    for (let index = 1; index <= number; index += 1) {
        summation += index;
    }
    return summation;
}
// Pronto, implentou o somatório.
