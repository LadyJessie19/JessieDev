function carregar() {
    var txt = document.getElementById('texto');
    var img = document.getElementById('img');
    var data = new Date;
    var hora = data.getHours();
    var min = data.getMinutes();
    txt.innerHTML = `Agora são ${hora}:${min}`;
    if (hora > 0 && hora <= 11) {
        img.innerHTML = 'manha.png';
        document.body.style.background = '#9C9200'
    } else if (hora >= 13 && hora <= 18) {
        img.src = 'tarde.png';
        document.body.style.background ='#E0D200'
    } else {
        img.src = 'noite.png';
        document.body.style.background ='#4F4A00'
    }
}