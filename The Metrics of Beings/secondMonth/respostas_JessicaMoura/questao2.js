const io = require('./../../io-lib/io')

io.write('Olá! Bem vindo(a) ao PVAB (Programa de Verificação de Ano Bissexto)')
io.write('Por favor, digite o ano abaixo:')
const ano = io.readInt()

if(ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
    io.write(`O ano ${ano} é bissexto`)
}else{
    io.write(`O ano ${ano} NÃO é bissexto`)
}

/* As regras para definição de um ano bissexto são as seguintes:

a. Divisível por 4. Sendo assim, a divisão é exata com o resto igual a zero;
ano % 4 == 0   
b. Não pode ser divisível por 100. Com isso, a divisão não é exata, ou seja,
deixa resto diferente de zero;
ano % 100 != 0
c. Pode ser que seja divisível por 400. Caso seja divisível por 400, a divisão
deve ser exata, deixando o resto igual a zero. 
or ano % 400 == 0
*/