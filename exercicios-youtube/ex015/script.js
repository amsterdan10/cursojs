function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('resu')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var masculino = document.getElementById('masc')
        var feminino = document.getElementById('femi')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (masculino.checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 11) {
                img.setAttribute('src', 'crianca-m.png')
            }
            else if (idade < 22) {
                img.setAttribute('src', 'jovem-m.png')

            }
            else if (idade < 50) {
                img.setAttribute('src', 'homem-m.png')
            } else {
                img.setAttribute('src', 'idoso-m.png')
            }
        } else if (feminino.checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 11 ) {
                img.setAttribute('src', 'crianca-f.png')
            }
            else if (idade < 22) {
                img.setAttribute('src', 'jovem-f.png')
            }
            else if (idade < 50) {
                img.setAttribute('src', 'mulher-f.png')
            } else {
                img.setAttribute('src', 'idosa-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos um${genero=='Mulher'?'a':''} ${genero} de ${idade} ano${idade>1?'s':''}.</p>`
        res.appendChild(img).style.width = '250px'
    }
}