const io = require('../io-lib/io')

io.write('Digite a base do retâgulo: ')
let base = io.read()
io.write('Digite a altura do retângulo: ')
let altura = io.read()
let area = base * altura
io.write('A área do retângulo é ' + area)