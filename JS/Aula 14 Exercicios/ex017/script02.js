function tabuada() {
    var selectlist = document.getElementById('selectlist')
    var numero = document.getElementById('txtnum')
    
    if (numero.value.length == 0) {
        window.alert(`Por favor, escolha um valor para calcular`)
    } else {
        selectlist.innerHTML = ""
    
        for (var i = 0; i < 11; i++) {  
            //var comentario = document.getElementById('recado')
            //comentario = `${numero} x ${i}`
            var option = document.createElement("option")
            option.value = i
            option.text = `${numero.value} x ${i} = ${numero.value * i}`
            selectlist.appendChild(option)
        }
    }
}