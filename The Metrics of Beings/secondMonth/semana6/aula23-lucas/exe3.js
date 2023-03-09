const io = require('./../../io-lib/io')

/* 3 - Escreva um programa em javascript que leia do usuário nomes, preços de produtos e quantidade
 * em estoque e guarde estes valores em um vetor. O usuário irá parar de entrar com valores quando digitar
 * um preço negativo. Lembre-se de não guardar o último valor no vetor. Esta questão é parecida com a prova,
 * porém, desta vez quero que cada produto seja um objeto e o vetor de produtos seja um vetor de objetos.
 */

let verdadeiro = true

while(verdadeiro){
    let estoque = {}
    io.write('Digite o preço do produto: ')
    estoque.preco = io.readInt()
    io.write('Digite o nome do produto: ')
    estoque.nome = io.read()
    io.write('Digite o volume de estoque: ')
    estoque.volume = io.readFloat()
    if(estoque.preco < 0){
        verdadeiro = false
    }
    console.log(estoque)
}

