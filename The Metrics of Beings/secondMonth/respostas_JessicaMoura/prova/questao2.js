const io = require('./../../io-lib/io')

const mensagem = [4, 20, 0, 12, 14, 9, 0, 21, 0, 18, 2, 17, 8, 15, 19] 
// Professor, troquei o 7 do 'h' pelo 8 do 'i'

const traducao = ["a", "b", "c", "d", "e", "f", 'g', "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let decifrado = mensagem.map(function (valor) {
    let res = traducao[valor]
    return res
})
let respostaPronta = `EU CONSEGUI DECIFRAR! A mensagem é ${decifrado}`

console.log('decodificando...')

setTimeout(escreva, 5*1000)

function escreva(){
    console.log(respostaPronta)
}

/* --------RESPOSTA DE UM COLEGA------------------ */

/* let decodificada = mensagem.map( function(valorN, indexNumero, mensagem){
    let letra
    traducao.forEach(function(valorL, indexLetra, traducao){
        if(indexLetra === valorN){
            letra = valorL
    }
    })
    return letra
})
console.log(`${mensagem}`)
console.log(`${traducao}`)
console.log(`${decodificada}`) */