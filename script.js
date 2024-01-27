const operation = document.querySelector('.operacao')
const button = document.querySelector('.button')

function inserir(number) {
    operation.innerHTML += number;
}

function clean() {
    operation.innerHTML = ''
}

function back() {
    var apagar = operation.innerHTML
    
    if(apagar.length > 0) {
        apagar = apagar.slice(0, -1)

        operation.innerHTML = apagar;
    }
}

function calcular() {
   var num = operation.textContent;

    if(num == '') {
        window.alert('Nenhum comando identificado.')

        operation = ''
    } else {
         var result = eval(num)

   operation.innerHTML = result
    }
}

function porcentagem() {
    var div100 = operation.textContent

    div100 = div100/100;

    if(div100 == '') {

    } else {
        operation.innerHTML = div100
    }

    
}
