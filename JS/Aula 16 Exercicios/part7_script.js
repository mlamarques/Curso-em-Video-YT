let numlist = []
let num = document.getElementById('txtnum')
let tab = document.getElementById('tblval')
let section = document.getElementById('section')

function addNumber() {
    if (num.value < 1 || num.value > 100 || num.value.length == 0 || numlist.includes(num.value)) {
        window.alert("Valor invalido ou ja adicionado na lista")
    } else {
        numlist.push(num.value)
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        //item.value = `tab${c}`
        tab.appendChild(item)
        num.value = ''
    }
}


function finalizar() {
    if (numlist.length == 0) {
        window.alert("Adicionar algum valor")
    } else {
        let len = numlist.length
        let max = Math.max(...numlist)
        /*
        let max = numlist.reduce(function(a, b) {
            return Math.max(a, b)
        })
        */
        let min = Math.min(...numlist)
        let sum = numlist.reduce((a, b) => Number(a) + Number(b) , 0)
        let avg = (sum / numlist.length)

        let taglen = document.createElement('p')
        let tagmax = document.createElement('p')    
        let tagmin = document.createElement('p')
        let tagsum = document.createElement('p')
        let tagavg = document.createElement('p')
        
        let nodelen = document.createTextNode(`Ao todo, temos ${len} numeros cadastrados.`)
        let nodemax = document.createTextNode(`O maior valor informado foi ${max}`)
        let nodemin = document.createTextNode(`O menor valor informado foi ${min}`)
        let nodesum = document.createTextNode(`A soma dos valores e igual a ${sum}`)
        let nodeavg = document.createTextNode(`O valor medio dos valores e ${avg}`)

        taglen.appendChild(nodelen)
        tagmax.appendChild(nodemax)
        tagmin.appendChild(nodemin)
        tagsum.appendChild(nodesum)
        tagavg.appendChild(nodeavg)
        
        section.appendChild(taglen)
        section.appendChild(tagmax)
        section.appendChild(tagmin)
        section.appendChild(tagsum)
        section.appendChild(tagavg)
    }
}