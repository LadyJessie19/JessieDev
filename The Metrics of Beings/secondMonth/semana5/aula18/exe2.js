const io = require('./../../io-lib/io')

//Escreva uma função que recebe as 3 notas de um aluno por parâmetro e uma letra. Se a letra for A o procedimento calcula a média aritmética das notas do aluno, se for P, a sua média ponderada (pesos: 5, 3 e 2). A função deverá retornar o valor da média calculada.

const io = require('../io-lib/io')

function calculaMedia(n1, n2, n3, tipo) {
    let media
    if (tipo === 'A') {
        media = (n1 + n2 + n3) / 3
    } else {
        media = ((n1 * 5) + (n2 * 3) + (n3 * 2)) / 10
    }
    return media
}

const nota1 = 9
const nota2 = 7
const nota3 = 8

const mediaAritmetica = calculaMedia(nota1, nota2, nota3, 'A')
io.write('A média aritmética é: ' + mediaAritmetica)

const mediaPonderada = calculaMedia(nota1, nota2, nota3, 'P')
io.write('A média ponderada é: ' + mediaPonderada)