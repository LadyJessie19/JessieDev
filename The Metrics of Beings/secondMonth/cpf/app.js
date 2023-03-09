const CPF_REQUIRED = 'Por favor insira o seu CPF'
const CPF_INVALID = 'Por favor insira um CPF no padrão correto (11 dígitos)'

function calculateIdentity(arrayNumeros, countStart) {
    let soma = 0
    let i = countStart
  
    arrayNumeros.forEach((numero) => {
      soma = soma + (parseInt(numero) * i)
      i++
    })
  
    const identity = soma % 11
    return identity === 10 ? 0 : identity
}

function validateCPF(input) {

    const cpf = input.trim().replaceAll('.', '').replaceAll('-', '')
  
    /*
      Transforma o CPF digitado em array
    */
    const cpfArray = cpf.split('')
    /*
      Os 9 primeiros dígitos do CPF são extraídos e armazenados na variável "firstNumbers".
      Neste momento a variável "cpfArray" passa a armazenar somente os dois ultimos números do CPF digitado.
    */
    const firstNumbers = cpfArray.splice(0, 9)
    /*
      Os primeiro dígito verificador é calculado e valor inicial do multiplicador é 1.
    */
    const firstIdentity = calculateIdentity(firstNumbers, 1)
    /*
      Os primeiro dígito verificador calculado é adicionado ao array "firstNumbers" para o cálculo do segundo dígito verificador. Agora o valor inicial do multiplicador é 0.
    */
    firstNumbers.push(firstIdentity)
    const secondIdentity = calculateIdentity(firstNumbers, 0)
    /*
      Checagem se os dígitos verificadores gera-dos são iguais aos dois últimos dífitos do CPF digitado.
    */
    if (parseInt(cpfArray[0]) !== firstIdentity || parseInt(cpfArray[1]) !== secondIdentity) {
      return 'erro'
    }
  
    return true
  }

    const letsGo = validateCPF('19541076769')
    
    let arrayOne = []

    let number = 0

    for(let i = 0; i < 999; i++){//fazer tb de 0 a 99
        let number = '19541' + i + '786'
        if(validateCPF(number) === true){
            arrayOne.push(number)
        }
    }

    let arrayTwo = []
    let num = 0

    for(let i = 0; i < 1000; i++){//fazer tb de 0 a 99
        let num = '19541' + i + '786'
        if(validateCPF(num) === true && num.length > 10){
            arrayTwo.push(num)
        }
    }

    console.log(arrayTwo)
    