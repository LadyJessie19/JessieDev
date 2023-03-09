const io = require('./../../io-lib/io')

//TODAS AS CORREÇÔES DA AULA 18 COPIEI DA PROFESSORA

//Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume (v = 4/3.P.R3).

function calculaVolume(r) {
    const volume = (4 / 3) * 3.14 * (r ** 3)
    return volume
}

io.write('Digite o valor do raio')
const raio = io.readFloat()
const resultado = calculaVolume(raio)
io.write('O valor do volume é: ' + resultado)