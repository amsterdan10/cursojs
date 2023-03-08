function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var sexo = ''
        var img = document.createElement('img')
        var fasevida = ''
        // img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            sexo = 'Homem'
        } else {
            //caso dê algo errado faça: if (fsex[1].checked) 
            sexo = 'Mulher'
        }

        if (idade >= 0 && idade < 11) {
            fasevida = 'crianca'
        } else if (idade < 22) {
            fasevida = 'jovem'
        } else if (idade < 51) {
            fasevida = 'adulto'
        } else {
            fasevida = 'idoso'
        }

        var foto_res = `img/foto_${fasevida.toLowerCase()}_${sexo}.png`
        img.setAttribute('src', foto_res)
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos um${sexo=='Mulher'?'a':''} ${sexo} com ${idade} ano${idade>1?'s':''} de idade.</p>`
        res.appendChild(img).style.width = '250px'
    }
}