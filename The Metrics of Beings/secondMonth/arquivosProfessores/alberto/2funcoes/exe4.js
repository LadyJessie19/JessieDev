const io = require('./../../io-lib/io')
/* Faça uma função que recebe a idade de um nadador por parâmetro e retorna a
categoria desse nadador de acordo com a tabela abaixo: */
//variaveis
let idade
let turma
//funcao
function verificaTurma(par1){
    let categoria
    if(par1 >= 5 && par1 <= 7){
        categoria = "Infantil A"
    } else if(par1 >= 8 && par1 <= 10){
        categoria = "Infantil B"
    }else if(par1 >= 11 && par1 <= 13){
        categoria = "Juvenil A"
    }else if(par1 >= 14 && par1 <= 17){
        categoria = "Juvenil B"
    } else if(par1 >= 18){
        categoria = "Adulto"
    }else if(par1 < 5){
        categoria = "[muito jovem para nadar]"
    }else {
        categoria = "[valor não definido]"
    }
    return categoria     
}
//chat
io.write('Digite a idade do aluno:')
idade = io.readInt()
turma = verificaTurma(idade)
//retorno
io.write(`A turma do aluno deverá ser ${turma}`)