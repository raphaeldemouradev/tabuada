const botao = document.getElementById('gerador')
botao.addEventListener('click', function gerador() {
    const numero = document.getElementById('numero').value
    const tabuada = document.getElementById('tabuada')
    tabuada.innerHTML = '' 

    if (numero.length === 0) {
        alert('Por favor, digite um número!')
    } else {

        for (var i = 0; i <= 10; i++) {
            var res = `${numero} x ${i} = ${numero * i} <br>`

            tabuada.innerHTML += res
        }
    }
})

const botaoApagar = document.getElementById('apagar')
botaoApagar.addEventListener('click', function apagar() {
    const numero = document.getElementById('numero')
    const tabuada = document.getElementById('tabuada')

    numero.value = ''
    tabuada.innerHTML = ''
})