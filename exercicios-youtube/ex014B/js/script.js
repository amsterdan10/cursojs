function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img_img')
    var header = document.getElementById('header')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    msg.innerHTML = `<p><strong>Agora ${hora<2?'é':'são'} ${hora<10?'0':''}${hora} hora${hora<2?'':'s'} e ${min < 10?'0':''}${min} minuto${min < 2?'':'s'}.</strong></p>` 
    
    if (hora >= 0 && hora < 12) {
        header.innerHTML = '<h1>Bom-dia!</h1>'
        document.body.style.backgroundColor = '#1c8ee4'
        img.src = 'img/morning-500.png'
    } else if (hora < 18) {
        header.innerHTML = '<h1>Boa-tarde</h1>'
        document.body.style.backgroundColor = '#fe7d05'
        img.src = 'img/afternoon-500.png'
    } else {
        header.innerHTML = '<h1>Boa-noite</h1>'
        document.body.style.backgroundColor = '#100d1e'
        img.src = 'img/night-500.png'
    }

}