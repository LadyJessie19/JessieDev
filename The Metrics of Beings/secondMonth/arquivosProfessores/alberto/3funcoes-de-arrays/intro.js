const io = require('./../../io-lib/io')

// funcoes anonimas
// são funcoes que nao possuem um nome, então nao podem ser chamadas, a menos que sejam atribuidas a uma variável
// usamos elas como parametros para outras funcoes

//uma variavel consegue ser acessada de fora do escopo de uma funcao, mas o contrario nao acontece

let batata = function(){
    return 'Estou de boas!'
}
//io.write(batata())// a primeira vez que eu rodei isso, esqueci os parenteses, então ele mostrou [Function: batata]. Dps eu adicionei os parenteses e ele executou a funçao dentro do io

// porque usamos funcoes anonimas? Parametro para outras funcoes!

let penelope = function(/* sem parametro */){
    return 'A funcao dentro da funcao retorna uma string se você quiser!'
}

function escreverFrase(par1){
    //console.log(par1())// não esqueça de add parenteses sempre que chamar uma funcao
}

//eu desliguei aqui o console.log

escreverFrase(penelope)// Por que não colocar aqui parenteses? Nesse caso pode ser tanto no
//console.log da function escreverFrase quanto na chamada da funcao escreverFrase
//pq nesse caso par1 = penelope. Quando lemos a function escreverFrase, podemos ler no lugar dos
// par1 a palavra penelope

// o comando escreverFrase(penelope) chamou a function escreverFrase, que quando usou o parametro (par1 recebeu penelope) dentro de sua funcao, acionou a function atribuida a variavel penelope no inicio do código

//MIND BLOWING!!!
//PODEMOS ESCREVER FUNCOES DENTRO DE PARAMETROS

function escreveEscreve(par1){
    console.log(par1())// com esses parenteses estou indicando que meu par1 deve ser uma funcao
}
//chamada da function
escreveEscreve(function() { //criando uma function anonima como parametro, tipo, do nada mesmo!
    return "Isso só vai ser escrito por que a function escreveEscreve tem o console.log"
})

//quando eu chamei a function escreveEscreve e defini que o parametro dela devia ser a function anonima, toda a configuraçao da function escreveEscreve com os par1 foram executados,exatamente como eu defini que eles deveriam ser executados

//o parametro representa como o valor deve se comportar dentro da function
// par1 é um resumo/representante da function anonima passada como parametro

// a matemática é uma forma de representar um número de várias formas
// o mesmo acontece com a programação
//um código pode ser escrito de diversas maneiras diferentes

