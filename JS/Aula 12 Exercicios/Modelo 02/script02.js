function verificar() {
    var data  = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique o ano e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade Calculada: ${idade}` //teste pra ver se funciona
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade < 10) {
                //crianca
                img.setAttribute('src', 'img-criancam.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img-jovemm.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img-adultom.png')
            }else {
                //idoso
                img.setAttribute('src', 'img-idosom.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade < 10) {
                //crianca
                img.setAttribute('src', 'img-criancaf.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img-jovemf.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img-adultof.png')
            }else {
                //idoso
                img.setAttribute('src', 'img-idosof.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}