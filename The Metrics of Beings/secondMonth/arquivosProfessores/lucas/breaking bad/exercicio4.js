const personagens = require("./personagens.json")
const episodios = require("./episodios.json")

const breakingBad = episodios.filter(function(item){
    return item.episode == 1 && item.series === "Breaking Bad"
})



console.log(breakingBad)

