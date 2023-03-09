const io = require('./../../io-lib/io')

let precos = [12, 13, 20, 28, 54, 98]
let produtos = ['lapis', 'apontador', 'caneta', 'estojo', 'caderno', 'mochila']

// console.log(`Os produtos da loja são ${produtos}`)


/* ---------------------- */
let arrayNomes = []
let arrayPrecos = []

function cadastrarProdutos(){
    let digitouNegativo = false
    
    while(digitouNegativo === false){
        io.write('Digite nome do produto: ')
        const nome = io.read()
        io.write('Preço:')
        const preco = io.readFloat()
        if(preco >= 0){
            arrayNomes.push(nome)
            arrayPrecos.push(preco)
        } else{
            digitouNegativo = true
        }
    }
}

let rodar = true
while(rodar){
    let sair
    io.write('Você deseja continuar?')
    sair = io.read()
    if(sair === 'sair'){
        rodar = false
    } else{
        io.write('Digite a letra que corresponde a opção desejada: ')
        io.write('b para ver lista de produtos cadastrados: ')
        io.write('c para ver pesquisar se determinado produto está no estoque: ')
        io.write('d para mostrar os produtos mais caros que o valor informado: ')
        io.write('e para mostrar os produtos mais baratos que o valor informado: ')
        io.write('f para calcular a média dos produtos informados: ')
        io.write('g para aumentar ou diminuir  ')
        let executando = true
        while(executando){
        io.write('Digite a opção: ')
        let opcao = io.read()
            if(opcao === 'a'){
                cadastrarProdutos()
        } else if(opcao === 'b'){
        io.write(arrayNomes)
        io.write(arrayPrecos)
        } else if(opcao === 'sair'){
        executando = false
        }
}
    }
    
}



