const io = require('./../../io-lib/io')

//HIGHLIGHT 3: SEMPRE TERÃO PELO MENOS 2 VARIAVEIS: A QUE RECEBE OS DADOS E A QUE DEMOSTRA OS DADOS

//entrada e saida de dados
io.write('Digite o tamanho do raio da esfera:')
let raio = io.readFloat()
let resultado = calcVolEsfera(raio)

//funcoes
function calcVolEsfera(n1){
    let res
    res = Math.round((3/4) * (3.14) * (n1 ** 3))
    return res
}
// Entregar
io.write(`O volume da esfera é ${resultado} cm cubicos`)

