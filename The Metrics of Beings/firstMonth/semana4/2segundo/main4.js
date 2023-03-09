const io = require('./../io-lib/io')

io.write('Digite há quantos anos você fuma:')
let anos = io.readInt()
io.write('Digite quantos cigarros você fuma por dia:')
let cigarrosDia = io.readInt()
io.write('Digite qual é o preço do maço: ')
let preco = io.readInt()

/* 2 anos
20 cigarros
7 reais */

let tempo = anos * 365 // 730
let cigarros = tempo * cigarrosDia // 14.600
let maços = cigarros/20
let gasto = maços * Number(preco)

io.write('Você é fumante há ' + anos + ' anos e fuma ' + cigarrosDia + ' cigarros por dia. Você já fumou '+ maços + ' maços em sua vida. Isso são ' + gasto + ' reais gastos com seu vício.')
