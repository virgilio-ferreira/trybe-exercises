//exercicio8
const assert = require('assert')

// Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:

const greet = (name = 'Stranger',greeting = 'Hi') => `${greeting} ${name}` // importante ter certeza o tipo da variável pra colocar {} ou [] ou ()

assert.equal(greet("John"), "Hi John")
assert.equal(greet("John", "Good morning"), "Good morning John")
assert.equal(greet("Isabela", "Oi"), "Oi Isabela")