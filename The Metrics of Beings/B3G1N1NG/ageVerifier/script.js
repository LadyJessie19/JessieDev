function verIdade(){
    var date = new Date()
    var ano = date.getFullYear()
    var fano = window.document.getElementById('txtano')
    var resu = window.document.getElementById('res')
    
    var idade = ano.value - 2022
    
    var sex = window.document.getElementsByClassName('sexo')
    var par1 = idade.value
    var par2 = sex.value
    if(par1 >= 18 && par2 == 'feminino'){
        //menina
    } else if(par1 >= 60 && par2 == 'feminino'){
        //mulher
    } else if(par1 <= 61 && par2 == 'feminino'){
        //idosa
    } else if(par1 >= 18 && par2 == 'masculino'){
        //menino
    } else if (par1 >= 60 && par2 == 'masculino'){
        //homem
    } else{
        //idoso
    }
        
}