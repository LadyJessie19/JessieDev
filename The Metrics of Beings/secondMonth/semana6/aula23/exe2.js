const personagens = require("./personagens.json")

const nomes = personagens.map(function(valor) {
    return valor.nickname
}) 
    

console.log(nomes)