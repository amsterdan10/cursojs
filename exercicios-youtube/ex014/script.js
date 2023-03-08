function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img_foto')  
    var header = document.getElementById('header')
    var data = new Date() 
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `<p><strong>Agora são ${hora}:${min}.</strong></p>`
    if (hora < 12) {
        //Bom-dia
        document.body.style.backgroundColor = '#1c8ee4'
        img.src = 'img/morning-500.png'
        header.innerHTML = `<h1>Bom-dia!</h1>`
    } else if (hora >= 12 && hora < 18) {
        //Boa-tarde
        document.body.style.backgroundColor = '#fe7d05'
        img.src = 'img/afternoon-500.png'
        header.innerHTML = `<h1>Boa-tarde!</h1>`
    } else {
        //Boa-noite
        document.body.style.backgroundColor = '#100d1e'
        img.src = 'img/night-500.png'
        header.innerHTML = `<h1>Boa-noite!</h1>`
    }
}

