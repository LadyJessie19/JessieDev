const io = require('./../io-lib/io')

let a = 10
let b = 20
let auxiliar = a
a = b
b = auxiliar

io.write('O valor de a é: ' + a)
io.write('O valor de b é: ' + b)
