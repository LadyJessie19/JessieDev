const io = require('./../../io-lib/io')
io.write('Digite o numero: ')
const posicaoFibonacci = io.readInt()
let array = Array(posicaoFibonacci).fill(0)
const descobrirNumFibonacci = function(valor, elemento, posicao, vetor){
    if (posicao <= 1){
        vetor[posicao] = valor
        return valor
    }
    vetor[posicao] = vetor[posicao - 1] + vetor[posicao - 2]
    return vetor[posicao]
}
const numFibonacci = array.reduce(descobrirNumFibonacci, 1)
io.write(numFibonacci)