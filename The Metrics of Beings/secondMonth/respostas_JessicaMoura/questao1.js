const io = require('./../../io-lib/io')

let semana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"]
io.write('Digite um número: ')
let dia = io.readInt() - 1

if(dia < 7){
    io.write(`Esse dia da semana é ${semana[dia]}`)
} else{
    io.write('Valor inválido')
}