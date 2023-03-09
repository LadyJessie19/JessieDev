/* Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, dado seu
raio e sua altura */

const io = require('./../io-lib/io')

io.write('Digite a altura da lata: ')
let altura = io.readFloat()
io.write('Digite o raio do comprimento da lata: ')
let raio = io.readFloat()
io.write('Digite a profundidade da lata:')
let prof = io.readFloat()

let sum = (altura * raio) * prof
let sum2 = sum * 1000

io.write(`O volume da lata é ${sum2} litros`)
