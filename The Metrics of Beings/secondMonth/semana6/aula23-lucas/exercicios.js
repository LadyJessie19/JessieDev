/**
 * 1 - Escreva um programa que lê os seguintes dados de um usuário: nome, idade, endereço
 * (rua, numero, bairro, cidade, uf), estado civil. E guarda estas informações dentro de um objeto.
 * Após isso, printe na tela os dados da seguinte forma: {nomePessoa}, {idadePessoa}, que mora na rua
 * {rua} {numero}, bairro {bairro}, {cidade}-{uf}. {estadoCivil}. Tente fazer o endereco ser um objeto
 * dentro do objeto pessoa.
 */

/**
 * 2 - Considere o objeto abaixo:
 */

const usuarios = [
  {
    nome: "Douglas",
    habilidades: ["Javascript", "ReactJS", "Redux"],
  },
  {
    nome: "Elton",
    habilidades: ["PHP", "Ruby on Rails", "Laravel"],
  },
]

/**
 * Escreva uma função que retorne o seguinte resultado:
 * O Douglas possui as habilidades: Javascript, ReactJS, Redux
 * O Elton possui as habilidades: PHP, Ruby on Rails, Laravel
 */

/**
 * 3 - Escreva um programa em javascript que leia do usuário nomes, preços de produtos e quantidade
 * em estoque e guarde estes valores em um vetor. O usuário irá parar de entrar com valores quando digitar
 * um preço negativo. Lembre-se de não guardar o último valor no vetor. Esta questão é parecida com a prova,
 * porém, desta vez quero que cada produto seja um objeto e o vetor de produtos seja um vetor de objetos.
 */

/**
 * 4 - Considerando o vetor da questão 3, escreva uma função que calcula dados para um relatório sobre
 * os produtos. Esta função deverá percorrer o vetor e retornar um objeto como o exemplo abaixo:
 */

const relatorio = {
  qtdProdutosAcabando: 1, //Quantidade de produtos com estoque menor que 5
  qtdProdutosExcesso: 1, //Quantidade de produtos com estoque maior que 30
  produtosAltoRetorno: [{ nome: "", preco: 0, estoque: 0 }], //Array de objetos com todos os produtos que custam mais de R$1000
}

/**
 * 5 - Implemente uma função que realiza uma busca por nome digitado na lista de produtos e retorne o seu nome,
 * preço e quantidade em estoque.
 */

/**
 * 6 - Implemente uma função que renova o estoque de todos os produtos a partir de um determinado valor inserido pelo
 * usuário.
 */
