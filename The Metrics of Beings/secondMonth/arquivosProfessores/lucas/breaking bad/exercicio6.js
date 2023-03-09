const io = require("../lib-io/io")
const episodios = require("./episodios.json")

io.write('Digite o nome do personagem')
const nomePersonagem = io.read().toLowerCase()
const episodiosPersonagens = []

episodios.forEach(function(item){
    item.characters.forEach(function(character){
        if(character.toLocaleLowerCase().includes(nomePersonagem)){
            episodiosPersonagens.push(item)
        }
    })
})

console.log(episodiosPersonagens)
