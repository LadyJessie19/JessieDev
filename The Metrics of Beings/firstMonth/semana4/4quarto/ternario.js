const io = require('../../io-lib/io')

io.write('Digite um número:')
let numero = io.read()

let res = numero > 100 ? "É maior que 100" : "É menor que 100"
io.write(res)
