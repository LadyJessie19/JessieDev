const io = require('./../../io-lib/io')
//Fiz com a professora

io.write('Qual a frase?')
frase = io.read()

function impares(par1){
    let arrayFrase = par1.split('')

    let array = arrayFrase.filter(function(elemento, index){
        return index % 2 !== 0
    })
    let meet = array.join('')
    return meet
}

let resposta = impares(frase)
io.write(resposta)

