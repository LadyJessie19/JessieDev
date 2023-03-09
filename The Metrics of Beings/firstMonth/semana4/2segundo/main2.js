const io = require('../io-lib/io')

io.write('Qual o salário? ')
let salario = io.readInt()
io.write('Qual o reajuste percentual?')
let porcento = io.readInt()

let aumento = (porcento*salario)/100
let salarioNovo = salario + aumento

io.write('------------------------------')
io.write('Salário atual: ' + salario + ' / ajuste percentual: '+ porcento +'%')
io.write('------------------------------')
io.write('O novo salário é de ' + salarioNovo + ' reais' )
io.write('------------------------------')
/* 
io.write('Qual o salário? ')
let salario = io.readInt()
io.write('Qual o reajuste percentual?')
let porcento = io.readInt()

let aumento = (porcento*salario)/100
let salarioNovo = salario + aumento

io.write('Salário atual: ' + salario + ' / ajuste percentual: '+ porcento +'%')
io.write('O novo salário é de ' + salarioNovo + ' reais' ) */