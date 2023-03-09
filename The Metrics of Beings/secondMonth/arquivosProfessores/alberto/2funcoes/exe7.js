const io = require('./../../io-lib/io')
/* Escreva uma função que recebe, por parâmetro, dois valores X e Z e calcula e retorna
Xz (X elevado à Z). (sem utilizar funções ou operadores de potência prontos) */
//funcao
function potencia(x, z){
    let res
    res = x ** z
    return res
}
//variaveis
let base
let exponencial
let resultado
//chat
io.write('Digite a base da potenciação:')
base = io.readInt()
io.write('Agora o expoente da potenciação:')
exponencial = io.readInt()
// Entrega final
resultado = potencia(base, exponencial)
io.write(`O resultado da potência entre ${base} e ${exponencial} é ${resultado}`)


//essa foi a resolução da professora
/* function potencia(numero, expoente) {
    let i = 0
    let resultado = 1 // Pois o 1 não interfere em multiplicação//Entendi 1 x algum numero é ele mesmo.

    //na potencia o produto deve continuar a ser multiplicado até o fim
    // então o produto da rodada do while deve continuar a ser multiplicado enquanto o contador for menor que o expoente(segundo arg)

    while (i < expoente) { // enquanto o contador for menor que o segundo parametro, o while deve continuar a rodar
        resultado = resultado * numero /
        i++
    }
    // o while devera rodar 3 vezes, pois o expoente é 3
// resultado agora é 1 x 4 = 4 / contador = 1
// resultado agora é 4 x 4 = 16 / contador = 2
// resultado agora é 16 x 4 = 64 / contador = 3
// programa para pois, o contador agora vale 4


    return resultado
}

const resultado = potencia(4, 3)
io.write('A potência é: ' + resultado) */