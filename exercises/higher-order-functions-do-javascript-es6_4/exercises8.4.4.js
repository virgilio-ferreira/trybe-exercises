//exercicio4
const assert = require('assert')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

// escreva filterPeople abaixo

// const filterPeople = (people) => people.filter(
//     ({ bornIn, nationality }) => bornIn >= 1901 && bornIn <= 2000 && nationality === "Australian"
// )


const filterPeople = (people) => {
  return people.filter(({bornIn, nationality}) => { // ficou dando indefined por que se tem chaves tem que ter return 
    return bornIn >= 1900 && bornIn <= 2000 && nationality === "Australian" // ficou dando indefined por que se tem chaves tem que ter return
  });
}
  
const filteredPeople = filterPeople(people)

assert.deepEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })