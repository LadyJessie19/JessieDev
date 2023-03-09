const io = require('./../../io-lib/io')

//Faça uma função que recebe um valor inteiro e verifica se o valor é par ou ímpar. A função deve retornar um valor booleano.

function ehPar(valor) {
    if (valor % 2) {
        return true
    }
    return false
}

const resultado = ehPar(7)
if (resultado) {
    io.write('O número é par.')
} else {
    io.write('O número é ímpar.')
}