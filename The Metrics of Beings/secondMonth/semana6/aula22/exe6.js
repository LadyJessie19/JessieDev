const io = require('./../../io-lib/io')

/* Escreva uma função que conte o número de vogais em uma string. Transforme
antes a string em lowercase para facilitar. */

let frase = 'a jessica eh linda e maravilhosa'
let frasePequena = frase.toLowerCase()
let vetor = frasePequena.split('')

function qtsVogais(par1){
    let agora = par1.reduce(function(valorAcumulado, valorAtual){
    if (valorAtual === 'a' || valorAtual === 'e' || valorAtual === 'i' || valorAtual === 'o' || valorAtual === 'u' ) {
        valorAcumulado++
    } 
    return valorAcumulado
    }, 0)
    return agora
}

let vogaisMesmo = qtsVogais(vetor)
console.log(`A quantidade de vogais na frase acima é ${vogaisMesmo}`)