const io = require('./../../io-lib/io')

/* Escreva uma função que receba duas strings e retorne todos os caracteres que não
são comuns entre elas. (Utilize includes e um loop para percorrer a string, strings
    possuem o atributo length igual aos vetores). */

let frase1 = 'the quick brown fox jumps over the lazy cat'
let frase2 = 'todos os seres humanos nascem livres e iguais em dignidade e em direitos'

vetor1 = frase1.split('')
vetor2 = frase2.split('')



function verificaLetra (par1, par2, par3){
    let lista
    for(let i = 0; i > par1.length; i++){
        
        if(par1.includes(par2[i]) === par3[i]) {
            lista.push(par2[i])   
    }
    return lista
}
}
    

const resultado = verificaLetra(frase1, vetor2, frase2)

console.log(`As letras em comun das duas frases são ${resultado}`)

//desisti um pouco!!!