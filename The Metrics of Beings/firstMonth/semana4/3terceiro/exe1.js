const io = require('./../io-lib/io')

/* O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem
do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do
distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de
fábrica de um carro, calcular e escrever o custo final ao consumidor. */

/*custo 1000
 parte distribuidor 280
 impostos 450
 sum = 280 + 450 = 730
sumCusto = 1000 + 730
 */

io.write('Escreva o custo do carro:')
let custo = io.readInt()

let sum = (custo * 0.28) + (custo * 0.45)
let sumCusto = custo + sum
io.write(`O carro deverá custar ${sumCusto} reais`)