const io = require('./../../io-lib/io')

//Escreva uma função que recebe, por parâmetro, dois valores X e Z e calcula e retorna Xz (X elevado à Z). (sem utilizar funções ou operadores de potência prontos)

function potencia(numero, expoente) {
    let i = 0
    let resultado = 1 // Pois o 1 não interfere em multiplicação

    while (i < expoente) {
        resultado = resultado * numero
        i++
    }

    return resultado
}

const resultado = potencia(4, 3)
io.write('A potência é: ' + resultado)