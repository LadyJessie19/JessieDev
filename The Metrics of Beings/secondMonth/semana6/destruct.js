let pal1

const eu = {
    nome: 'Jessica',
    idade: 23,
    signo: "peixes",
    ocupação: "escritora",
    livros: {
        livro1:{
            nome: 'Romana',
            genero: 'Mistério',
        },
        livro2:{
            nome: 'Brasen',
            genero: 'Distopia'
        },
        livro3: {
            nome: 'Nós em Bediane',
            genero: 'Romance'
        },
    },
    Comida: ['Pizza', 'Macarrão', 'Doce de Leite', 'Esfiha'],
}

//console.log(eu.Comida[2])


/* //FUNCIONOU! EU NÃO MEXO!
let {nome} = eu.livros.livro1
console.log(nome) */
//retornou romana

//vou acompanhar a aula

const { nome:nhenhe } = eu//precisa ter o nome da chave e o nome do obj
//para chamar o nome dentro do obj, chamamos o que está DENTRO das {}
console.log(nhenhe)
//funcionou. retornou jessica