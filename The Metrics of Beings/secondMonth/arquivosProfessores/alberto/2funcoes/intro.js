const io = require('./../../io-lib/io')

//pdf aula 18 - funcoes
//funcoes

//são linhas de código que sempre serão acionadas quando chamadas
/* são blocos de instruções que servem para executar uma determinada tarefa ou calcular um
determinado valor. */

//ex de funcoes - io.write/io.read/require/console.log

//Criando uma funcao

//1 keyword function
//2 nome funcao
//3 argumentos entre parenteses ()
//4 linha de código que deve ser acionado quando a funcao e chamada {}
//5 no final devemos dar return no resultado ou produto final da funçao

//HIGHLIGHT 1: Quando começamos uma funcao, devemos ter bem definido o produto final dessa funcao!
//HIGHLIGHT 2: Não tenha medo de criar de inicio mil variaveis, mas se preocupe em entregar o meno número possivel de variaveis

function somar(n1, n2) {
    let sum = n1 + n2
    return sum
}
/* 
io.write('Digite um número: ')
let num1 = io.readInt()
io.write('Digite um número: ')
let num2 = io.readInt()
let sum = somar(num1,num2)
console.log(`A soma dos dois numeros informados é ${sum}`) */
/* --------------------------------------------------------- */
/* 
io.write('Digite seu primeiro nome: ')
let primeiro = io.read()
io.write('Digite seu nome do meio: ')
let meio = io.read()
let nome = somar(primeiro, meio)
io.write(`Seu nome é ${nome}`)
 */
/* ---------------------------------------------------------- */
/* 
io.write('Digite o preço do macarrão: ')
let macarrao = io.readFloat()
io.write('Digite o preço do feijão: ')
let feijao = io.readFloat()
let total = somar(macarrao, feijao)
io.write(`Sua compra total deu ${total} reais`)
 */

// Vantagens das funcoes

//1 facilitar a leitura do seu código
//2 mais organização
//3 reaproveitar linhas de código

// o return devolve o produto da funcao
// uma funçao é um forninho e os parametros são os ingredientes
// o return devolve o prato para onde nós começamos a cozinhar

// Passagem por valor e por referência

// variaveis são passadas por valor
// Não são modificadas caso sejam modificadas dentro do escopo de uma função

//vetores são modificados por referência, então são modificados dentro do escopo de uma função