const io = require('./../io-lib/io')

io.write('Digite o nome do Aluno(a): ')
let nome = io.read()
io.write('Digite a primeira nota: ')
let nota1 = io.readFloat()
io.write('Digite a segunda nota: ')
let nota2 = io.readFloat()
io.write('Digite a terceira nota: ')
let nota3 = io.readFloat()

let sum = (nota1 + nota2 + nota3)/3
let sum2 = Math.round(sum)

io.write(`O aluno(a) ${nome} teve a média ${sum2}.`)