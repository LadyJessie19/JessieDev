const io = require('./../../io-lib/io')

//Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna essa idade expressa em dias.

function calculaIdade(anos, meses, dias) {
    return (anos * 365) + (meses * 30) + dias
}

const resultado = calculaIdade(26, 9, 10)
io.write('A idade em dias é: ' + resultado)