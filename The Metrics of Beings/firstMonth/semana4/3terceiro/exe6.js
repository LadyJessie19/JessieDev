const io = require('../io-lib/io')

/* Faça um algoritmo que transforme uma velocidade fornecida em m/s pelo usuário para
Km/h. Para tal, multiplique o valor em m/s por 3,6. */

io.write('Informe a velocidade em m/s: ')
let metros = io.readInt()

let sum = Math.round(metros * 3.6)

io.write(`Essa velocidade equivale a ${sum} km/h`)