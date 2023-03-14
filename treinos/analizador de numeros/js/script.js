var num = document.querySelector('#txtnum')
var list = document.querySelector('#selList')
var res = document.querySelector('#res')
var valores = []

function isNumero(n) {  
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function isLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false 
    }
}

function adicionar() {
    if (isNumero(num.value) && !isLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adcionado.`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var somar = 0
        var media = 0
        for (let pos in valores) {
            somar += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor) 
                menor = valores[pos]
        }
        media = somar / valores.length

        res.innerHTML = `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores informados é igual a ${somar}.</p>`
        res.innerHTML += `<p>A média dos valores informados é igual a ${media}.</p>`

    }
}


