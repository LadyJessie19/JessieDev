const io = require('./../../io-lib/io')
/* Escreva um programa que recebe 6 pesos de um grupo de pessoas e depois escreve na tela se aquele grupo possui um média de peso maior ou menor do que 60 Kg. (utilize reduce) */

let pesos = []
let i = 0

while(i < 6){
    io.write('Digite um peso: ')
    const peso = io.readFloat()
    pesos.push(peso)
    i++
}
io.write(pesos)
//reduce sempre vai retornar um valor
const soma = pesos.reduce(function(acumulador, elemento){
    return acumulador + elemento
}, 0)// eu defino que meu acumulador começa com 0

io.write(soma)

const media  = soma / pesos.length

if(media > 60){
    io.write('Maior que 60')
} else if(media < 60){
    io.write('Menor que 60')
}

 