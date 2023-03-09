const io = require('../io-lib/io')

/* io.write('Digite o número de votos:')
let votos = io.readInt() */
io.write('Digite os votos brancos: ')
let votosBrancos = io.readInt()
io.write('Digite os votos nulos: ')
let votosNulos = io.readInt()
io.write('Digite os votos válidos: ')
let votosValidos = io.readInt()

let votos = votosBrancos + votosNulos + votosValidos

let porBrancos = 100*(votosBrancos/votos)
let porNulos = 100*(votosNulos/votos)
let porValidos = 100*(votosValidos/votos)

io.write('O número total de votos foi ' + votos)
io.write('A porcentagem de Votos Brancos é de ' + porBrancos + '%')
io.write('A porcentagem de Votos Nulos é de ' + porNulos + '%')
io.write('A porcentagem de Votos Válidos é de ' + porValidos + '%')