const io = require('./../../io-lib/io')

//funcoes de array

const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9] // o total da soma é 45
let print
/* ---------------------------- */
//.isArray
//DIZ SE É UM ARRAY. RETORNA TRUE OR FALSE
print = Array.isArray(array)//não entendi... pq Array.isArray(array)
//tá, vou só usar XD
// retornou true no terminal
/* ---------------------------- */
//.at
//MOSTRA QUAL O VALOR NO ENDEREÇO INDICADO DO ARRAY
print = array.at(0)
//o terminal mostrou o numero 1, pois o valor da primeira posição(0) é o item 1
//se o número -1 for usado, o .at vai acessar a última posição do array 
/* ---------------------------- */
//.forEach()
//RODA UMA FUNÇÃO QUE VAI PASSAR POR CADA UM DOS ITENS DO ARRAY
let sum = 0 // declarar o resultado como 0 fora da função
array.forEach( function(valor){//não é necessário colocar um iterador, pois o forEach irá parar no final do vetor
    sum = sum + valor // o que deve ser repetido em cada um dos itens do vetor
})// cada vez que o forEach rodar ele deve incrementar seu valor
print = (sum)

//pq não usamos return na function do forEach? pq não estamos modificando seu valor, 
//e sim fazendo um calculo usando todos os seus itens
//forEach retorna um numero
// os parametros da função da funçao de array são (valor, index, vetor)

//testando aqui rapidão//

/* 
let arrayDobro
array.forEach(function (v1){
    arrayDobro = v1 * 2
})
print = arrayDobro
 */

//não deu certo! ARGGGG!
//Minha ideia é fazer um forEach que dobre os itens do array
//POXA! fAZ ISSO COM MAP
/* ---------------------------- */
//.map
//mesma coisa que o forEach? NIntendo...
//AHHH! Entendi! Cria um array novo! passando por cada um dos itens
let dobro = array.map(function(v1){//pelo que entendi, o primeiro par é o valor do item da array
    let double = v1 * 2// HIGHLIGHT 7: sempre começo com uma var que no final eu irei retornar
    return double
})
//print = dobro
//AEEEE! FIZ SEM OLHAR!!!
/* ---------------------------- */
//.filter
//retorna um novo array
//deverá sempre retornar true e false
//no loop - cada valor dever retornar um boleano
//true - aquele membro seja incluído no novo array 
//false - membro não será incluído no novo array.
let pares = array.filter(function (valor) {
    if(valor % 2 === 0) return true
    return false
})
//print = pares
//tb consegui sem olhar!!!!!
/* ---------------------------- */
//.splice
//remover elementos de um array
//ela MODIFICA o array, portanto utilize com cuidado

//tentei fazer uma função que faz uma cópia

//PRIMEIRA VEZ QUE TENTO ALGUMA COISA E CONSIGO FAZER!!!
//FUNÇAO COPIA ARRAY

function copiaVetor(nome){
        let dois
        dois = nome.filter(function(valor){
          if(valor !== " ") return true
          return false
        })
        return dois
      }
  let arrayCopia = copiaVetor(array)
  /* console.log(array)
  console.log(arrayCopia) */

//Será que vai funcionar
//...funcionou... que estranhoo

//array.splice(1, 1, 900) //[1, 3, 4, 5, 6, 7, 8, 9] removeu o 2 e add 900 no lugar
// console.log(array)

/* ---------------------------- */
//.slice
//retorna um novo array que é um pedaço do array original
//primeiro número é um índice inclusivo e o segundo um índice exclusivo.
print = array.slice(1, 4)
//Agora eu tô fera!
/* ---------------------------- */
//.reverse
//reverte a ordem dos elementos dentro de um array
//cria um novo array a partir do antigo
print = array.reverse()
/* ---------------------------- */
//find
//ele retorna o PRIMEIRO elemento do array que satisfaz a condição
//retorna ou true ou false
// para usar devemos perguntar: Será que dentro do vetor existe esse valor?
print = array.find(function (valor){
    if(valor === 9) return true
    return false
})
// eu perguntando pro find se tem algum numero 9 no meu vetor
// o programa respondeu "Sim, jéssica. Nós temos um valor no vetor arrays identico ao que você especificou"
// e eu disse: "Tá, mas kd ele?"
// o programa respondeu: "Sei lá! Isso é com o findIndex"
//*Boa noite*
//tá, tô entendendo...
/* ---------------------------- */
//findIndex
//faz a mesma coisa que o find, mas devolve
//ele retorna a posição do vetor do PRIMEIRO elemento do array que satisfaz a condição proposta
print = array.findIndex(function(valor){
    if(valor === 9) return true
    return false
})
/* ---------------------------- */
//every
// vai verificar se todos os elementos do array cumprem com a condição especificada
// retorna true or false

print = array.every(function (valor){
    if(typeof valor === 'number') return true
    return false
})
/* ---------------------------- */
//some
//vai verificar se pelo menos um valor vai cumprir com a condição estabelecida
// tb retorna true or false
print = array.some(function(valor){
    if(valor === 99) return true
    return false
})
/* ---------------------------- */
//indexOf()
//encontra o valor digitado como parametro
print = array.indexOf(7)
/* ---------------------------- */
//sort
//vai organizar alfabeticamente ou numericamente
print = array.sort()
/* ---------------------------- */
//.fill
// vai preencher todas as posições do array com o que você colocar dentro dos parenteses. inicio e fim são os outros par
//ele não vai criar posições!
print = array.fill('pizza', 8, 13)
/* ---------------------------- */
//reduce
//transforma o array
// retorna um valor
//pode ser para um novo array, para um número, uma string, um objeto, depende do desenvolvedor
// diferente das outras funcoes, pois na funcao de seu parametro, temos os parametros valorAcumulado e valorAtual
//valor acumulado é o resultado final do seu reduce
//tambem podemos usar para descobrir qtd itens do mesmo tipo temos dentro do array

//vou tentar fazer um reduce que faz a média de todos os itens de um array
print = array.reduce(function(valorAcumulado, value){
    if (typeof value === 'string') return valorAcumulado
    return valorAcumulado + value
}, 0)// 0 representa onde o reduce deve começar a rodar no array
sum = print / array.length
/* ---------------------------- */
array.pop()
// console.log(print)
console.log(array)
console.log(`A média dos itens informados é ${sum}`)