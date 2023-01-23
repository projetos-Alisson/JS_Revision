function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length != 4 || fano.value > ano){ //se o usuário não preencher o campo com 4 caracteres que sejam menor que o ano atual
        window.alert ('[ERRO] Dados incorretos, digite novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)               
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Masculino'

            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'img/bebe-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/jovem-m.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'img/adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso-m.png')
            }

        } else if(fsex[1].checked){
            genero= 'Feminino'
 
                if (idade >=0 && idade < 10){
                    //Criança
                    img.setAttribute('src', 'img/bebe-f.png')
                } else if (idade < 21) {
                    //Jovem
                    img.setAttribute('src', 'img/jovem-f.png')
                } else if (idade < 50){
                    //Adulto
                    img.setAttribute('src', 'img/adulto-f.png')
                } else {
                    //idoso
                    img.setAttribute('src', 'img/idoso-f.png')
                }
        }
        res.innerHTML= `Gênero: ${genero}; Idade: ${idade}. `
        res.style.textAlign = 'center'
        
        res.appendChild(img) //adicionar um elemento (img) 
    } 

}
