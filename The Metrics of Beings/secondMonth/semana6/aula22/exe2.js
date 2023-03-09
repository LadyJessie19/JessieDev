const io = require('./../../io-lib/io')

io.write("Digite o preço:")
preco = io.read()

novo = preco.split('.')
console.log(novo)

io.write(`Esse preço em reais é R$${novo[0]},${novo[1]}`)

//A correção da professora
//vdd o professor pediu uma função
function arredondar(valor){
    const numeroArredondado = numero.toFixed(2).toString()
    const valorEmReal = numeroArredondado.replace('.', ',')
    return 'R$' + valorEmReal
}

const numero = arredondar(5.375)
io.write(numero)
