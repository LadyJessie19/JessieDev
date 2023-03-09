const episodios = require('./episodios.json')

let primeiro = episodios.filter(function(episodio){
    return episodio.episode === "1"
})

let segundo = primeiro.map(function(episodio) {
    return episodio.title
})

let terceiro = segundo.join(', ')

//console.log(primeiro)
console.log(`Os primeiros episódios das temporadas têm o título de ${terceiro}`)