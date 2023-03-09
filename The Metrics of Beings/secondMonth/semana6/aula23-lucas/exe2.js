const io = require('./../../io-lib/io')

const usuarios = [
    {
      nome: "Douglas",
      habilidades: ["Javascript", "ReactJS", "Redux"],
    },
    {
      nome: "Elton",
      habilidades: ["PHP", "Ruby on Rails", "Laravel"],
    },
  ]
  const {nome: nomeD, habilidades:skillD} = usuarios[0]
  const {nome: nomeE, habilidades:skillE} = usuarios[1]



function naoEnche(){
    return (`O ${nomeD} possui as habilidades: ${skillD.join(', ')}`)
}
function naoEnche2(){
    return (`O ${nomeE} possui as habilidades: ${skillE.join(', ')}`)
}
console.log(naoEnche())
console.log(naoEnche2())

/* O Douglas possui as habilidades: Javascript, ReactJS, Redux
 * O Elton possui as habilidades: PHP, Ruby on Rails, Laravel */
