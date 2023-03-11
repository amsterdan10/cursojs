let num = [5, 8, 3, 2, 5]

console.log(num)
num[5] = 6
console.log(num)
num[3] = 9
console.log(num)
num[7] = 8
console.log(num)
num.push(9)
console.log(num)
console.log(num.length)
num.sort()
console.log(num)
console.log(num[3])

for (let pos = 0; pos < num.length; pos++) {
    console.log(`${num[pos]}`)
}

/*
Por padrão, o método sort() classifica os valores como strings em ordem alfabética e crescente. Usando esse método alternativo é possível ordenar também valores numéricos:
num.sort(function(a, b){return a-b})
*/
//console.log(num.sort(function(a, b){return a-b}))