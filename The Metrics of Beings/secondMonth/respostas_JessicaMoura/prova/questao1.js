const io = require('./../../io-lib/io')

//Variáveis
let precos = []
let verdade = true
let maisQue500
let produtos
let precosEvery
let precosSome

//Entrada de dados
while(verdade){
    /* let contador = 0 */
    let preco
    io.write('Digite o preço do produto: ')
    preco = io.readFloat()
    if(preco >= 0){
        precos.push(preco)
    } else{
        verdade = false
    }
    /* contador++ */
}
//Calculos

//Calculo Letra A
maisQue500 = precos.reduce(function (valorAcumulado, valorAtual) {
    if (valorAtual >= 500) {
        valorAcumulado++
    }
    return valorAcumulado
}, 0)

//Calculo Letra B
produtos = precos.filter( function (valor){
    if(valor >= 500){
        return true
    }
    return false
})

//Calculo Letra C
precosEvery = precos.every( function (valor){
    if(valor >= 1.99){
        return true
    }
    return false
})

//Calculo Letra D
precosSome = precos.some( function (valor) {
    if(valor >= 1000) return true
    return false
})

//Funções
function letraA(){
    return `Na lista informada temos ${maisQue500} produtos com o preço maior que 500 reais`
}
function letraB(){
    return `E seus preços são ${produtos}`
}
function letraC(){
    if(precosEvery){
        return ('Não existem produtos mais baratos que 1.99')
    } else{
        return ('Existe um ou mais produtos mais baratos que 1.99')
    }
}
function letraD(){
    if(precosSome){
        return ('Existem um ou mais produtos mais caros que 1000 reais')
    } else{
        return ('Não existe nenhum produto mais caro que 1000 reais')
    }
}

//Saída de dados
console.log(letraA())
console.log(letraB())
console.log(letraC())
console.log(letraD())
