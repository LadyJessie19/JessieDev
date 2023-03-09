const numeros = [1, 2, 3, 4]
const maisNumeros = [
  4, 5, 2, 4, 6, 2, 21, 3, 2, 5, 7, 7, 4, 3, 2, 2, 4, 5, 7, 3, 3, 3, 2, 34,
]

function somar(...num) {
  return num.reduce(function (acumulador, valor) {
    return acumulador + valor
  }, 0)
}

const resultado = somar(...numeros)
// console.log(resultado)
// console.log("vetor: ", numeros, "spreaded", ...numeros)

numeros.splice(2, 0, ...maisNumeros)
// console.log(numeros)

// -----------------------------------------------------------------------------------
// Deep copy

const array1 = [1, "Teste", 425, "Teste2"]
const array2 = array1
array2.push(6)
// console.log(array1)

const array3 = [1, "Teste", 425, "Teste2"]
const array4 = [...array3]
array4.push(6)
// console.log(array3)

// -----------------------------------------------------------------------------------
// Spread em objetos

const obj1 = {
  rua: "Teste",
  numero: 0,
  bairro: "aaa",
  cidade: "nbbbb",
}
const obj2 = obj1
obj2.estado = "MG"
// console.log(obj1)

const obj3 = {
  rua: "Teste",
  numero: 0,
  bairro: "aaa",
  cidade: "nbbbb",
}
const obj4 = { ...obj3 }
obj3.estado = "MG"
// console.log(obj4)

const endereco = {
  rua: "Rua da Bahia",
  numero: 422,
  bairro: "Centro",
  cidade: "Belo Horizonte",
  estado: "MG",
  pais: "Brasil",
}

const endereco2 = {
  ...endereco,
  rua: "Rua Ceará",
  numero: 567,
  complemento: "apto 201",
}
// console.log(endereco, endereco2)

// -----------------------------------------------------------------------------------
// Arrow Function

function multiplicar1(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number")
    throw new Error("Você deve passar números")
  return num1 * num2
}

const multiplicar2 = function (num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number")
    throw new Error("Você deve passar números")
  return num1 * num2
}

const obj = {
  numeros: [3, 2, 1, 3, 1],
  frase: "O número é: ",

  mostrarNumeros() {
    this.numeros.forEach(function (numero) {
      console.log(this.frase, numero)
    })
  },

  mostrarNumerosArrow() {
    this.numeros.forEach((numero) => {
      console.log(this.frase, numero)
    })
  },
}

// obj.mostrarNumeros()
// obj.mostrarNumerosArrow()

// Escrever função que divide dois números

function divide1(num1, num2) {
  return num1 / num2
}

const divide2 = (num1, num2) => {
  return num1 / num2
}

const divide3 = (num1, num2) => num1 / num2

const dividePor2 = numero => numero / 2

// console.log(divide1(2, 1), divide2(2, 1), divide3(2, 1))
// console.log(dividePor2(4))

function somar2(...num) {
  return num.reduce((acumulador, valor) => acumulador + valor, 0)
}
// console.log(somar2(...numeros))
