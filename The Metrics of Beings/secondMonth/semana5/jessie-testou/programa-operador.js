const io = require('./../../io-lib/io')

//nao deu >.<....

//variaveis
let num1
let ope
let num2
let res

//saida e entrada
io.write('Digite o primeiro número: ')
num1 = io.readInt()
io.write('Digite o operador desejado: ')
ope = io.read()
io.write('Digite o segundo número')
num2 = io.read()

res = operacao(num1,ope,num2)
// functions

function operacao(par1, par2, par3){
    let res
    res = (par1) (par2) (par3)
    return res
}

//chat final
io.write(`Os números informados foram ${num1} e ${num2}`)
io.write(`A operação selecionada foi ${ope}`)
io.write('-------------')
io.write(`O resultado da operação é ${res}`)