const personagens = require("./personagens.json")

const better = personagens.filter(function(personagem) {
    return personagem.category.includes('Better Call Saul')
})

const better2 = better.map(function(personagem) {
    return personagem.name
})

let better3 = better2.join(', ')

console.log(`No total foram ${better.length} personagens que apareceram na spinoff`)
console.log(`E eles foram ${better3}`)  

//console.log(better, better.length)