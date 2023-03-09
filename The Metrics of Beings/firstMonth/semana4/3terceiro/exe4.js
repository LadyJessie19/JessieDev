const io = require('./../io-lib/io')

io.write('Digite o nome do Aluno(a): ')
let nome = io.read()
io.write('Digite a primeira nota com o peso 2: ')
let nota1 = io.readFloat()
io.write('Digite a segunda nota com o peso 3: ')
let nota2 = io.readFloat()
io.write('Digite a terceira nota com o peso 5: ')
let nota3 = io.readFloat()

let sum = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5))/10
let sum2 = Math.round(sum)

io.write(`O aluno(a) ${nome} teve a média ${sum2}.`)