const io = require('./../../io-lib/io')

/* Faça um programa de computador que receba do usuário três tamanhos de segmentos
de reta e acuse se estes segmentos formam ou não os lados de um triângulo. Para formar
um triângulo o maior segmento deve ser menor que a soma dos outros dois. */

io.write('Olá!')
io.write('Digite o tamanho do primeiro lado:')
let primeiro = io.readFloat()
io.write('Digite o tamanho do segundo lado:')
let segundo = io.readFloat()
io.write('Digite o tamanho do terceiro lado:')
let terceiro = io.readFloat()

// para formar um triangulo um lado deve ser MENOR que a soma dos outros dois
// primeiro < (segundo + terceiro)
// segundo < (primeiro + terceiro)
// terceiro < (primeiro + segundo)

if(primeiro < segundo + terceiro && segundo < primeiro + terceiro && terceiro < primeiro + segundo){
    io.write('Esses segmentos podem formar um triângulo!')
} else{
    io.write('Esses segmentos NÃO podem formar um triângulo!')
}