function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        var fasevida = ''
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
        } else if (fsex[1].checked){
            genero = 'Mulher'
        }

        if(idade >= 0 && idade < 10){
            fasevida = 'crianca'
        } else if (idade >= 10 && idade < 21){
            fasevida  = 'jovem'
        } else if (idade >= 21 && idade < 50){
           fasevida = 'adulto'
        } else {
            fasevida  = 'idoso'
        }
        
        var foto_res = `img/foto_${fasevida}_${genero.toLowerCase()}.png`
        img.setAttribute('src', foto_res)
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos um${genero=='Mulher'?'a':''} ${genero} com ${idade} ano${idade>1?'s':''} de idade.</p>`
        res.appendChild(img).style.width = "250px"
    }
}