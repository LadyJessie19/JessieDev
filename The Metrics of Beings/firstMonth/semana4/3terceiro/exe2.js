const io = require('./../io-lib/io')

/* Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por
mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das
vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele
vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro
vendido. Calcule e escreva o salário final do vendedor.*/

/* salário fixo
comissão fixa
5% do volume de vendas
4 variaveis
numero de carros
total em vendas
salário fixo
valor ganho por carro */

io.write('Olá!')
io.write('Digite o salário fixo do vendedor(a): ')
let salarioFixo = io.readInt()
io.write('Digite a porcentagem da comissão por venda: ')
let comissão = io.readInt()
io.write('Digite o número de carros que o vendedor(a) vendeu: ')
let carros = io.readInt()
io.write('Digite o total em vendas do vendedor(a): ')
let vendas = io.readInt()

/* total_comissao = total_carros_vendidos * valor_comissao;
    total_comissao = total_comissao + ( total_vendas * 5/100 );

    total_salario = total_comissao + salario_base; */


let sum = carros * comissão
sum = sum + (vendas * 5/100)

let sum2 = sum + salarioFixo

io.write(`Carros vendidos: ${carros} | Total em vendas: ${vendas} reais | Salário Fixo: ${salarioFixo} reais | Porcentagem da comissão: ${comissão}%`)
io.write(`O salário deste mês do vendedor deve ser de ${sum2} reais`)