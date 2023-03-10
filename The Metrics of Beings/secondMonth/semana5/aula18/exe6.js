const io = require('./../../io-lib/io')

//Faça uma função que leia um número não determinado de valores positivos e retorna a média aritmética dos mesmos. (Utilize o número -1 como critério de parada da repetição)

function lerValores() {
    let leia = true
    let soma = 0
    let quantidade = 0

    while (leia) {
        io.write('Digite um numero inteiro: ')
        const valor = io.readInt()

        if (valor === -1) {
            leia = false // leia não atenderá mais a condição do laço
        } else {
            soma = soma + valor
            quantidade++
        }
    }

    return soma / quantidade
}

const resultado = lerValores()
io.write('A média aritmética é: ' + resultado)