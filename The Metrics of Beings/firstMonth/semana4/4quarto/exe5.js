const io = require('./../../io-lib/io')

/* Faça um programa de computador que receba do usuário 2 números e acuse qual é o maior. */

io.write('Escreva o primeiro número:')
let num1 = io.readInt()
io.write('Escreva o segundo número:')
let num2 = io.readInt()

if(num1 > num2){//Não entendi... Ah, ta! Precisei colocar readInt
    io.write(`Entre os dois números, ${num1} é maior que ${num2}`)
} else {
    io.write(`Entre os dois números, ${num2} é maior que ${num1}`)
}