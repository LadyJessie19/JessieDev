const io = require('./../../io-lib/io')
/* Faça uma função que leia um número não determinado de valores positivos 
e retorna a média aritmética dos mesmos. (Utilize o número -1 como critério de parada
da repetição). */
//funcao
function media(){// A ordem dessa function é FUNCTION/VAR TRUE/WHILE/IF
    let deixar = true // para que o programa rode quantas vezes o usuário quiser, preciso de uma variavel true, e ao comando do usuário
    let sum = 0// >>> ela irá se tornar false
    let qtd = 0
    while(deixar){// nesse caso usamos o while pois não sabemos o final do loop
        io.write('Digite um número: ')
        let numero = io.readInt()// essa parte me dava muita dúvida pq, eu pensava, onde colocar a info do usuario
        if(numero === -1){//>>> mas como sabemos e podemos realizar a matemática direto, não é necessário mostrar os valores, AINDA!
            deixar = false
        } else{
            sum = sum + numero
            qtd = qtd + 1
        }
    }
    let resposta = sum / qtd // colocar o calculo e o retorno fora do while
    return resposta
}
let mediaNumeros = media() // chamar a funçao dentro de uma var. parametros são desnecessários nesse caso
io.write(`A média aritimética entre os valores informados é: `)
io.write(mediaNumeros)
