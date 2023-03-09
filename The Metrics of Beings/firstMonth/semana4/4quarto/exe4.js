const io = require('./../../io-lib/io')

//Faça um programa de computador que recebe do usuário um número e acuse se este número é maior que zero e menor que 10.

io.write('Digite um número, meu bem:')
let num = io.read()

if(num > 0 && num < 10){
    io.write(`O número ${num} está entre 0 e 10`)
} else{
    io.write(`O numero ${num} não está entre 0 e 10`)
}