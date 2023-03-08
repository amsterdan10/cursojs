var contando = 0
var res = window.document.getElementById('resultado')

function contar() {
    contando++
    res.innerHTML = `<p>O contador está com <mark>${contando}</mark> cliques</p>`
}

function zerar() {
    contando = 0
    res.innerHTML = `<p>O contador está com <mark>${contando}</mark> cliques</p>`

}
