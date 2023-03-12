var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
console.log(`Agora são ${hora}:${min}.`)
if (hora >= 4 && hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18 && hora >= 4 ) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}