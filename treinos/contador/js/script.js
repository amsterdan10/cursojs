function contar() {
    let ini = document.querySelector('#txtini')
    let fim = document.querySelector('#txtfim')
    let pas = document.querySelector('#txtpas')
    let res = document.querySelector('#res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert('[ERRO] Por favor, prencha todos os campos!')
    } else if (Number(pas.value <= 0)) {
        alert('Você não preencheu o campo de passo! Considerarei como PASSO 1!')
        pas = 1  
    } else {
        res.innerHTML = 'Contando:<br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `<span>\u{1F449}${c} </span>`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `<span>\u{1F449}${c} </span>`
            }
        }
        res.innerHTML += `\u{1F449}Fim!`
    }
}