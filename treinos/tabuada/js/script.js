function gerar() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('[ERRO] Por favor, digite um número!')
    } else {
        let n = Number(num.value)

        tab.innerHTML = ''
        for (let c = 1; c <= 10  ;c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
        }
    }
}

/*
TESTAR DEPOIS

function go(){
    if(document.querySelector('input#txtn').value.length == 0){
        alert('Por favor, insira um número')
    }else{
        document.querySelector('select#seltab').innerHTML = ``
        var n = Number(document.querySelector('input#txtn').value)
        for(let c = 1;c <= 10;c++){
            let mult = document.createElement('option')
            mult.text = `${n} * ${c} = ${n*c}`
            mult.value = `tab${c}`
            document.querySelector('select#seltab').appendChild(mult)
        }
    }
}
*/