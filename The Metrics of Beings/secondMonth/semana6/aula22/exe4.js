const io = require('./../../io-lib/io')

io.write('Digite uma frase: ')
frase = io.read()
vetor = frase.split('')
fraseReverse = vetor.reverse()
pronto = fraseReverse.join('')
console.log(pronto)