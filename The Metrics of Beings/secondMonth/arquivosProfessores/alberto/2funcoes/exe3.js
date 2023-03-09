const io = require('./../../io-lib/io')
/* Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e
retorna essa idade expressa em dias. */
//funcao
function calcDias(par1, par2, par3){
    let sum = (par1 * 365) + (par2 * 30) + par3
    return sum
}
//variáveis
let anos
let meses
let dias
let res
//chat com user
io.write('Quantos anos?')
anos = io.readInt()
io.write('Quantos meses?')
meses = io.readInt()
io.write('Quantos dias?')
dias = io.readInt()
//resposta final
res = calcDias(anos, meses, dias)
io.write(`Essa pessoa viveu ${res} dias` )