const io = require('./../../io-lib/io')

//Faça um programa de computador que recebe um número e acusa se este número é par ou ímpar.

io.write('Digite um número:')
let num = io.read()

if( num % 2 != 0){
    io.write('Esse número é impar')
} else {
    io.write('Esse número é par')
}