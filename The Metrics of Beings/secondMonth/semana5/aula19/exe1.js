const io = require('./../../io-lib/io')

/* Escreva uma função que recebe um array de números, dado este array, a função deverá
1 - Deixar no array somente os números ímpares (utilize filter)
2 - Somar todos os números restantes (utilize forEach)
3 - Escrever a string "Javascript é muito bom" no console um número x de vezes, sendo x a soma dos números restantes do array (utilize o while)
 */

function funcaoNumeros(arrayNumeros){
    io.write(arrayNumeros)
    let somaDosPares = 0
    let i = 0
    const numerosImpares = arrayNumeros.filter(function (numero){
        if (numero % 2 !== 0){
            return true
        }
        return false
    })

    arrayNumeros.forEach(function (numero){
        if(numero % 2 === 0){
            somaDosPares = somaDosPares + numero
        }
    })

    io.write(numerosImpares)
    io.write(somaDosPares)

    while(i < somaDosPares){
        io.write('Javascript é muito bom')
        i++
    }
}
const numeros = [1, 2, 3, 4, 5]
funcaoNumeros(numeros)