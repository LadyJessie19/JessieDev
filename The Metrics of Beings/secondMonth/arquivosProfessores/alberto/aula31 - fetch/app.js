const characters = []

// async function getCharacters () {
//   characters.push(...(await (await fetch('https://www.breakingbadapi.com/api/characters')).json()))
// }

// Fetch com then e catch
function getCharacters() {
  fetch("https://www.breakingbadapi.com/api/characters")
    .then((response) =>
      response
        .json()
        .then((responseText) => console.log(responseText))
        .catch((error) => console.log("Erro ao converter em JSON", error))
    )
    .catch((error) => console.log(error))
}

// Fetch com async/await

async function getCharacters() {
  try {
    const apiResponse = await fetch(
      "https://www.breakingbadapi.com/api/characters"
    )
    const characters = await apiResponse.json()
    return characters
  } catch (error) {
    console.log("Ocorreu um erro", error)
  }
}

getCharacters()

// Exemplo de promise, ela executa após 5s a resposta se foi um sucesso ou uma falha.
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const number = Math.random()
    if (number > 0.5) resolve("A promisse foi um sucesso")
    else reject("A promise falhou")
  }, 5000)
})

// console.log(promise)
// promise.promise.then((response) => console.log(response))
