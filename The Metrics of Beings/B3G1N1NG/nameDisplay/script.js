

document.getElementById('buttonNome').onclick = function(){
    let nome = document.getElementById('inputNome').value

    let primeiro = nome.slice(0, nome.indexOf(" "));
    let segundo = nome.slice(nome.indexOf(" "));

    document.getElementById('labelNome'). innerHTML = ("Olá! Seu primeiro nome é " + primeiro + " e seu segundo nome é " + segundo + ".")
}