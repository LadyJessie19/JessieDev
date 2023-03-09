const io = require('../../io-lib/io')

let idades = new Array(7)
let pesos = new Array(7)
let somaIdades = 0
let acimaDoPeso = 0

for(let iterador = 0; iterador < idades.length; iterador++){
    io.write(`Digite a idade da pessoa número ${iterador + 1}:`)
    idades[iterador] = io.readInt()
    io.write(`Digite o peso da pessoa número ${iterador + 1}:`)
    pesos[iterador] = io.readInt()
    somaIdades = somaIdades + idades[iterador]
    if(pesos[iterador] >= 90){
        acimaDoPeso = acimaDoPeso + 1
    }
}

let media = Math.round(somaIdades / idades.length)

io.write(`As idades informadas foram ${idades}`)
io.write(`Os pesos informados foram ${pesos}`)
io.write('----')
io.write(`A média idades é de ${media} anos`)
io.write(` Existem ${acimaDoPeso} pessoas com o peso acima de 90 quilos`)

// pessoa 1 - 14 67
// pessoa 2 - 15 56
// pessoa 3 - 32 78
// pessoa 4 - 38 99
// pessoa 5 - 22 101
// pessoa 6 - 43 86
// pessoa 7 - 12 54
// A média das idades é 25.14
// Existem 2 pessoas acima de 90 quilos