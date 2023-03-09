const personagens = require("./personagens.json")

let vivos = personagens.filter(function(personagem){
    return personagem.status === 'Alive'
})

const nomes = vivos.map(function(valor) {
    return valor.name
}) 

console.log(nomes)