function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 2
msg.innerHTML = `agora sao ${hora} horas`
if (hora >= 0 && hora <= 12) {
    //BOM DIA
    img.src = 'fotomanha.png'
    document.body.style.background = '#eaedf2'
    document.getElementById('header').style.color = '#2b2f42'
} else if (hora > 12 && hora < 18) {
    //BOA TARDE
    img.src = 'fototarde.png'
    document.body.style.background = '#eca86b'
} else {
    //BOA NOITE
    img.src = 'fotonoite.png'
    document.body.style.background = '#2b2f42'
}
}