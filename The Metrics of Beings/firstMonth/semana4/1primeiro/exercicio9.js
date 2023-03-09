const io = require('./../io-lib/io')

io.write('Qual o salário? ')
let salario = io.readInt()
io.write('Qual o reajuste percentual?')
let porcento = io.readInt()

let aumento = (porcento/100) * salario
let salarioNovo = salario + aumento

io.write('Salário atual: ' + salario + ' / ajuste percentual: '+ porcento +'%')
io.write('O novo salário é de ' + salarioNovo + ' reais' )

/* const reajuste = salario * (percentualReajuste / 100)
const novoSalario = salario + reajuste */