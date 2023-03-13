var num = Number(document.querySelector('#txtnum').value)

var valores = []
function adicionar() {
    valores.push(num)
}

function finalizar() {
    var saida = document.querySelector('#saida')
    saida.innerHTML += `${valores}`
}

