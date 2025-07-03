function sortear() {
    let numeros = [];
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let min = parseInt(document.getElementById("de").value);
    let max = parseInt(document.getElementById("ate").value);

    if (isNaN(quantidade) || isNaN(min) || isNaN(max) || quantidade <= 0 || min >= max) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    while (numeros.length < quantidade) {
        let numero = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
        else {
            alert("Número duplicado encontrado: " + numero + ". Tentando novamente.");
        }
    }

    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numeros}</label>`
    alterarStatusBotao();
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}