const io = require('./../../io-lib/io')

io.write('Vamos descobrir se um número é primo?')
io.write('Digite abaixo um número inteiro:')
let num = io.readInt()
let divisor = 0
let divisores = 2// Ele mesmo e 1
let iterador = 0

while(iterador < num + 1){
    if(num % iterador == 0){
        divisor = divisor + 1
    }
    iterador++
}

if(divisor == divisores){
    io.write(`O número ${num} é primo`)
} else{
    io.write(`O número ${num} não é primo`)
}