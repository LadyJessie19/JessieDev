const io = require('./../../io-lib/io')
/* Faça uma função que recebe um valor inteiro e verifica se o valor é par ou ímpar. A
função deve retornar um valor booleano. */
//funcao
function funcao(n1){
    let res
    if(n1 % 2 === 0){
        res = "Esse número é par!"
    } else{
        res = "Esse número é ímpar!"
    }
    return res
}
//variaveis
let num
let resposta
//chat
io.write('Vamos descobrir se o número é par ou ímpar: ')
io.write('Digita um número ai: ')
num = io.readInt()
resposta = funcao(num)
io.write(resposta)