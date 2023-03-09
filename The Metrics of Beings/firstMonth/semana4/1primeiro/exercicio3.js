const io = require('./../io-lib/io')

io.write('Digite um número inteiro:')
let num = io.readInt()
let ant = num - 1
io.write('Seu número antecessor é ' + ant)