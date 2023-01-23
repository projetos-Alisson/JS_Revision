function loading() { 
var msg = window.document.getElementById('msg')
var foto = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()




msg.innerHTML = `${hora}:${min}`

if(hora >=0 && hora < 12) {
    //BOM DIA!
    foto.src = 'img/manhã.jpg' //VAI PEGAR O id image, QUE POSSUI src DA img
    document.body.style.background = "#F2BF5E"
} else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    foto.src= 'img/tarde.jpg'
    document.body.style.background = "#E26F12"
} else{
    //BOA NOITE
    foto.src = 'img/noite.jpg'
    document.body.style.background = "#142740"
}

}


