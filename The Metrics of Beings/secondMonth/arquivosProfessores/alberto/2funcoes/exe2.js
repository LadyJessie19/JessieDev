const io = require('./../../io-lib/io')

/* Escreva uma função que recebe as 3 notas de um aluno por parâmetro e uma
letra. Se a letra for A o procedimento calcula a média aritmética das notas do
aluno, se for P, a sua média ponderada (pesos: 5, 3 e 2). A função deverá retornar o
valor da média calculada. */

function calcMedia(n1, n2, n3, tipo){
    let sum //declarei qual o produto que a função deve entregar quando for acionada
    if(tipo === "a"){
        sum = Math.round((n1 + n2 + n3) / 3)
    } else if(tipo === "p"){
        sum = ((n1*5) + (n2*3) + (n3*2)) / 10
    }
    return sum// e retornei no local certo
}

io.write('Qual o nome do aluno: ')
let nome = io.read()

function perguntaNota(){//preciso salvar isso e nunca mais perder!!!!!!!!!
    let vetor = []//abri um vetor aqui
    for(let i = 1; i < 4; i++){
        io.write(`Digite a nota número ${i}:`)
        vetor[i - 1] = io.readFloat()
    }
    return vetor//retornei o vetor aqui
}

let notas = perguntaNota()// aqui eu vi que eu não precisava falar que essa variavel era um vetor. A propria função atribuiu
io.write('As nota informadas foram ' + notas)
io.write('--------------------------------------')

//AHHHHHHHHH! cONSEGUI PORRAAAAAAAA! cOLOCAR UM VETOR DENTRO DE UMA FUNCTION

/* io.write('Digite a primeira nota:')
let nota1 = io.readFloat()
io.write('Digite a segunda nota:')
let nota2 = io.readFloat()
io.write('Digite a terceira nota:')
let nota3 = io.readFloat() */


io.write('Qual a média deve ser usada:')
io.write('Digite a para Média Aritmética ou p para Média Ponderada')
let tipoMedia = io.read()

let resultado = calcMedia(notas[0], notas[1], notas[2], tipoMedia)

io.write(`A média do aluno ${nome} é de ${resultado}`)