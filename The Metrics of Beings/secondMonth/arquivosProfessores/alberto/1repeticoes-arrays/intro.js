const io = require('../../io-lib/io')

//pdf aula 17 - while

/* ------------------------------------------------------ */
/* let qtdNegativos = 0
let iterador = 0
while(iterador < 5){
    io.write('Digite um número: ')
    let numero = io.readFloat()
    if(numero < 0) {
        qtdNegativos = qtdNegativos + 1
    }
    iterador++
}
io.write('A quantidade de números negativos é ' + qtdNegativos) */
/* ------------------------------------------------------ */

//pdf aula 17 - for

/* let numeros = 0
for(let i = 0; i < 5; i++){
    io.write('Escreva um número: ')
    let numero = io.readFloat()
    if(numero < 0){
        numeros = numeros + 1
    }
}
io.write("A quantidade de números negativos é " + numeros)
 */
/* ------------------------------------------------------ */

/* Notas: for é um resumo do while. As informações do iterador são colocados em locais diferentes */

/* ------------------------------------------------------ */

/* Diferença entre o while e o for:
for - usado para quando sabemos o final do loop, qts vezes o loop irá rodar;
while - para quando não sabemos quando o loop irá terminar 
*/

/* ------------------------------------------------------ */

//listas

//São variaveis compostas

let vetor = [1, 2, 3, 4, 5, 6]// vetor de 6 posições
let vetor2 = []//vetor vazio
let vetor3 = new Array(10)//Array vazio com 10 posições

//Acessando uma posição do vetor
// vetores são 0 based index

//console.log(vetor[3])//node imprime 4

//Propriedades do vetor

//criar um vetor
let vetore = ["jessica", "yllana", "isabelle"]
//ou
let vetore2 = new Array(10)
/* --------------------------------------------------- */

//descobrir o tamanho do array
//para add um item a lista vetore a um endereço especifico
//usar a posição do vetor com o endereço, sinal de atribuição e o valor que deve ocupar a posição
vetore[3] = 'ana carolina'
//para add um valor no final do vetor----NOTA! Add aos parenteses o valor que será adicionado
vetore.push('Jonh Snow')
//para add um valor no inico do vetor
vetore.unshift('Denver')
//para remover um valor no final do vetor----NOTA! Não é preciso add nada aos parenteses
vetore.pop()
//para remover um valor no inicio do vetor
vetore.shift()
/* console.log(`Está lista agora têm ${vetore.length} posições`)
console.log(vetore) */

//shifts pertencem ao inicio e push e pop pertencem ao final do array

//Percorrendo um vetor

let vitor = [5,10,20,50,100]
/* 
console.log(`No Brasil temos as notas de:`)
for(let i = 0; i < vitor.length; i++){
    console.log(`${vitor[i]} reais`)
}
 */

