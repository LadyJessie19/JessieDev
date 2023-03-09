/* 1 - Escreva um programa que lê os seguintes dados de um usuário: nome, idade, endereço
 * (rua, numero, bairro, cidade, uf), estado civil. E guarda estas informações dentro de um objeto.
 * Após isso, printe na tela os dados da seguinte forma: {nomePessoa}, {idadePessoa}, que mora na rua
 * {rua} {numero}, bairro {bairro}, {cidade}-{uf}. {estadoCivil}. Tente fazer o endereco ser um objeto
 * dentro do objeto pessoa.
 */ 

const io = require('./../../io-lib/io')

//Devemos primeiro fazer um obj com todas as variaveis como os valores das chaves. e dentro desse obj tambem temos outro obj, no caso o obj de endereço

const lista = {}

io.write('Digite seu nome:')
lista.nome = io.read()
io.write('Digite sua idade:')
lista.idade = io.readInt()
io.write('Digite seu estado civil:')
lista.estadoCivil = io.read()
io.write('Por favor, informe seu endereço agora:')
io.write('Digite a rua:')
lista.rua = io.read()
io.write('Digite o numero')
lista.numero = io.readInt()
io.write('Digite o bairro')
lista.bairro = io.read()
io.write('Digite a cidade')
lista.cidade = io.read()
io.write('Digite o estado')
lista.uf = io.read()

/* lista.endereco.rua = io.read()
io.write('Digite o número:')
lista.endereço.numero = io.read()
io.write('Digite o Bairro:')
lista.endereco.bairro = io.read()
io.write('Digite a cidade:')
lista.endereço.cidade = io.read()
io.write('Qual seu estado?')
lista.endereço.uf = io.read() */

let {nome} = lista
let {idade} = lista
let {rua} = lista
let {numero} = lista
let {bairro} = lista
let {cidade} = lista
let {uf} = lista
let {estadoCivil} = lista

console.log(`Seu nome é ${nome}, de ${idade} anos, que mora na rua ${rua} ${numero}, bairro ${bairro}, ${cidade}-${uf}. Seu estado civíl é ${estadoCivil}.`)


