const io = require('./../../io-lib/io')

let frase = 'agora! voltar vou Eu'

function reverteFrase(par1){
    let passo1 = par1.split(' ')
    let passo2 = passo1.reverse()
    let passo3 = passo2.join(' ')
    return passo3
}

let resposta = reverteFrase(frase)

console.log(`A frase com as palavras ao contrário é ${resposta}`)