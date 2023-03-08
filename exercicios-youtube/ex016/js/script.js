function carregar() {
    var cump = document.getElementById('cumprimentos')
    var relo = document.getElementById('relogio')
    var data = new Date()
    var hora = data.getHours()
    var minu = data.getMinutes()
    relo.innerHTML = `${hora<10?'0':''}${hora}:${minu<10?'0':''}${minu}`
    
    if (hora >= 0 && hora < 12) {
        cump.innerHTML = '<h1>Bom-dia!</h1>'
    } else if (hora < 18) {
        cump.innerHTML = '<h1>Boa-tarde!</h1>' 
        document.body.style.backgroundImage = 'b'
    } else {
        cump.innerHTML = '<h1>Boa-noite!</h1>'
    }
}