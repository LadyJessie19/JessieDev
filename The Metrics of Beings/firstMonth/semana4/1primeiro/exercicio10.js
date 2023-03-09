const io = require('./../io-lib/io')

io.write('Digite a temperatura em Fahrenheit:')
let fahr = io.readInt()

let cel = ((fahr - 32) / 9 ) * 5

io.write('Essa temperatura em Celsius é ' +cel+ ' graus')

// 212 Fahrenheit são 100 graus 