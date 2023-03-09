const io = require("../lib-io/io")
const personagens = require("./personagens.json")
const episodios = require("./episodios.json")

io.write('Escreva um número de temporada')
const numTemporada = io.read()

io.write('Escreva um número do episódio')
const numEpisodio = io.read()

io.write('Escreva um número da série (1 - Breaking Bad, 2 - Better Call Saul) ')
const numSerie = io.read()

const messageEnd = episodios.find(function(element) {
    if(numSerie == 1){
        return element.season === numTemporada && element.episode === numEpisodio && element.series === "Breaking Bad"
    } else if(numSerie == 2) {
        return element.season === numTemporada && element.episode === numEpisodio && element.series === "Better Call Saul"
    }   
})

console.log(messageEnd ? 'Titulo Episodio: '+ messageEnd.title : 'Não foi possível encontrar esses dados em nossa base')


