function contar() {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var conIni = Number(ini.value)
        var conFim = Number(fim.value)
        var conPas = Number(pas.value)
        
        if (conPas <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            conPas = 1
        }

        if (conIni < conFim) {
            //Contagem crescente
            while (conIni <= conFim) {
                res.innerHTML += `<span>\u{1F449}${conIni} </span>`
                conIni += conPas
            }
        } else {
            //Contagem regressiva
            while (conIni >= conFim) {
                res.innerHTML += `<span>\u{1F449}${conIni} </span>`
                conIni -= conPas
            }
        }
        res.innerHTML += `\u{1F449}Fim!`
    }
}