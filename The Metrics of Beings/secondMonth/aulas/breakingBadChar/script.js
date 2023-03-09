const characters = []
let position = 0

async function getCharacters () {
  characters.push(...(await (await fetch('https://www.breakingbadapi.com/api/characters')).json()))
  getCharacter(position)
}
function getCharacter(position){
    const thisCharacter = characters[position]

    let occupations = '<ul>'
    let appearances = '<ul>'

    const retrato = document.getElementById('image')
    const nombre = document.getElementById('name')
    const cumpleanos = document.getElementById('birthday')
    const trabajo = document.getElementById('occupations')
    const abelido = document.getElementById('nickname')
    const actor = document.getElementById('actor')
    const aparencias = document.getElementById('apperance')

    const jobCatch = thisCharacter.occupation
    const apperanceCatch = thisCharacter.appearance

    jobCatch.forEach(function (valor) {
        occupations = occupations + `<li>${valor}</li>`
      })
      occupations = occupations + '</ul>'
    

      apperanceCatch.forEach(function (valor) {
        appearances = appearances + `<li>${valor}</li>`
      })
      appearances = appearances + '</ul>'

    retrato.src = thisCharacter.img
    nombre.innerHTML = thisCharacter.name
    cumpleanos.innerHTML = `Data de Nascimento: ${thisCharacter.birthday}`
    trabajo.innerHTML = 'Ocupações:' + occupations
    abelido.innerHTML = `Apelidos: ${thisCharacter.nickname}`
    actor.innerHTML = `Ator/Atriz: ${thisCharacter.portrayed}`
    aparencias.innerHTML = 'Aparece nas temporadas:' + appearances
}
function next(){
    position = position + 1 >= characters.length ? 0 : position + 1
    getCharacter(position)
}
function previous(){
    position = position - 1 < 0 ? characters.length - 1 : position - 1
    getCharacter(position)
}

