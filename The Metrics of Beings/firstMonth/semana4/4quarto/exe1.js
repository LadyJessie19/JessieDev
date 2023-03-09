const io = require('./../../io-lib/io')

io.write('Digite um número:')
let num = io.read()

if(num > 100){
    io.write('Esse número é maior que 100')
} else if (num == 100) {
    io.write('O número é igual a 100')
} else {
    io.write('Esse número é menor que 100')
   
}
