function comprar () {
    // obter informação do tipo de ingresso
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    // obter informação da quantidade de ingressos
    let quantidadeIngresso = document.getElementById('qtd').value;
    if (quantidadeIngresso <= 0 || quantidadeIngresso === '') {
        alert('Quantidade inválida!');
        return;
    }
    else {
        quantidadeIngresso = parseInt(quantidadeIngresso);
    }
    // atualizar a quantidade de ingressos disponíveis
    let quantidadeDisponivel = parseInt(document.getElementById(`qtd-${tipoIngresso}`).innerHTML);
    // dar um alert caso não haja ingressos disponíveis
    if (quantidadeDisponivel < quantidadeIngresso){
        alert('Essa quantidade não está disponível!');
        return;
    }
    else {
        quantidadeDisponivel -= quantidadeIngresso;
        document.getElementById(`qtd-${tipoIngresso}`).innerHTML = quantidadeDisponivel;
    }

}