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
        alert('oi')
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}


