let n1 = 8
let n2 = 4
let n3 = 9
let n4 = 7

function mediafinal(p1, p2, p3, p4) {
    //parâmetro opcional - vc pode colocar por exemplo p4=0. Caso vc não coloque o valor de p4 na chamada, ele recebera 0.
    return (p1 + p2 + p3 + p4) / 4
}

console.log(`A média final é igual a ${mediafinal(n1, n2, n3, n4)}`)