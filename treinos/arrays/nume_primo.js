/*
Caique Costa
há 1 ano
Com a aula de hoje eu fiz um programinha que calcula se um número é primo ou não, segue código:
Obs: apenas o script, a parte HTML é o do modelo dos desafios passados.
*/
function primar(){
var num = document.getElementById('num').value //recebe o input
var primo = document.getElementById('txt') //onde sairá o resultado
let n = Number(num)
if (num == ""){ //alertando que não há nada preenchido
    alert('Por favor, digite um número!')
}else if (num <= 0){ //alertando que o número não é válido
    alert('Insira um número válido!')
}else if (num == 1){ 
    primo.innerHTML = '<strong>1</strong> não é considerado primo, pois possui apenas um divisor.'
}else{
    let div = [] //divisores
    for(c=1;c<=n;c++){
        if (n%c==0){ //se na divisão entre "n" e o contador não houver resto, "c" é divisor de "n"
            div.push(c) //adicionando "c" aos divisores de "n"
        }
    }
    if (div[1]==n){ //se um número é primo, significa que o segundo divisor (índice 1 na array) dele é ele mesmo
        primo.innerHTML = `<strong>${n}</strong> é primo, pois é divisível apenas por <strong>1</strong> e por <strong>${n}</strong>`
    }else{
        primo.innerHTML = `<strong>${n}</strong> não é primo, pois é divisível por`
        for (pos=0;pos<div.length-1;pos++){ //div.lenght - 1 para não finalizar com vírgula
            primo.innerHTML += `<strong> ${div[pos]},</strong>`
        }
        primo.innerHTML += `<strong> ${n}.</strong>` //finalizando com "." (ponto)
    }
}
}