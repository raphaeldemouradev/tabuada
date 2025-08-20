const botao = document.getElementById('gerador')
botao.addEventListener('click', function gerador() {
    const numero = document.getElementById('numero').value
    const tabuada = document.getElementById('tabuada')

    for (var i = 0; i <= 10; i++) {
        tabuada.innerHTML += `${numero} x ${i} = ${numero * i} <br>`
    }

    if (numero.length == 0) {
        alert('Por favor, digite um número!')
        tabuada.innerHTML = ''
    }
})

const botaoApagar = document.getElementById('apagar')
botaoApagar.addEventListener('click', function apagar() {
    const numero = document.getElementById('numero')
    const tabuada = document.getElementById('tabuada')

    numero.value = ''
    tabuada.innerHTML = ''
})