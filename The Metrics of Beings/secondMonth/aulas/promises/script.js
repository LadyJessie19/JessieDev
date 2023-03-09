const myPromise = new Promise((resolve, reject) => {// 2 arg, sucesso ou fail
    const nome = 'João'
    if(nome === 'Matheus'){
        resolve('Usuário Matheus encontrado!')// bloco if para sucesso
    } else{
        reject('O usuário não foi encontrado!')// bloco else para fail
    }
})

myPromise.then((data) => console.log(data)).catch((par1) => {
    //return console.log(`aconteceu um erro no sistema : ${par1}`)
})// isso executa a resposta da promise

//podemos fazer o encadeamento de thens a vontade
// podemos usar com o then o método catch para mostrar melhor o erro
//O catch não para o programa, o que é muito bom
// a promise é uma function asyncrona, ela não depende do fluxo do código para funcionar

//propriedade da classe promise - all

const p1 = new Promise((resolve) => {
    resolve('p1 ok!')
})
const p2 = new Promise((resolve) => {
    resolve('p2 ok!')
})
const p3 = new Promise((resolve) => {
    resolve('p3 ok!')
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => console.log(data))

//tb existe o race, que faz uma corrida entre as promises

//para fazer uma requisição de api do github
//no headers da requisição, colocar
//Accept: 'application/vnd.github.v3+json'

const userName = 'JessieLady'

const agora = fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
})
.then((res) => {
    return res.json()
}).then((data) => console.log(data))

//consegui pegar meus dados no gitHub
// usamos o .json no fetch para conseguir ver a resposta/objeto

async function pegaDados(){
    const resultadoConvertido = await fetch('https://api.github.com/users/JessieLady').then((res) => res.json())
}
console.log(resultadoConvertido)