function calculate() {
    var start = document.getElementById('txtstart')
    var end = document.getElementById('txtend')
    var step = document.getElementById('txtstep')
    var res = document.querySelector('div#res')
    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        res.innerHTML = 'Impossivel contar '
        res2.innerHTML = ''
        window.alert('Por favor, preencha todas opcoes com valores diferentes de 0!')
    } else if (start.value <= end.value) {
        res.innerHTML = 'Contando: '
        //res.appendChild() = `Detectamos start = ${start.value}, end = ${end.value} e step = ${step.value}!`
        res2.innerHTML = `${start.value} &#128073;&#127995; `
        stair = Number(start.value) + Number(step.value)
        while (end.value > stair) {
            res2.innerHTML += `${stair} &#128073;&#127995; `
            stair += Number(step.value)
        } res2.innerHTML += '&#128681;'
    } else {
        res.innerHTML = 'Contando: '
        res2.innerHTML = `${start.value} &#128073;&#127995; `
        stair = Number(start.value) - Number(step.value)
        while (end.value < stair) {
            res2.innerHTML += `${stair} &#128073;&#127995; `
            stair -= Number(step.value)
        } res2.innerHTML += '&#128681;'
    } 
}