const io = require('./../../io-lib/io')

/* 1 - Escreva um programa que leia 5 valores numéricos e coloque-os em um vetor
(crie o vetor com Array(5) e preencha com um forEach). Depois:
a - Verifique se todos os elementos deste vetor são pares.
b - Verifique se algum elemento deste vetor é maior do que 50.
c - Gere um novo vetor diminuindo o valor de cada número em 15%.
d - Filtre deste vetor todos os elementos divisíveis por 3. */

let numeros = funcao()

function funcao(){
    let vetor = []
    for(let iterador = 0; iterador > vetor.length; iterador++){
        io.write(`Digite o numero ${iterador + 1}`)
        vetor[iterador] = io.readInt()
        io.write(`Valor informado: ${vetor[iterador]}`)
    }
    return vetor
}

//variaveis
//funçoes
//saida e entrada
//chat final