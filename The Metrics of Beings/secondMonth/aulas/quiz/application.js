const modal = document.getElementById('modal')
const container = document.getElementById('container')

function openModal(){
    modal.style.display = 'block'
}

function closeModal(){
    modal.style.display = 'none'
}

function quizStart(){
    modal.innerHTML = ``
}