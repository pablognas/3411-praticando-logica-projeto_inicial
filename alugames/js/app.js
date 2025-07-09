function alterarStatus(item){
    let botao = document.getElementsByClassName('dashboard__item__button')[item-1];
    // console.log(botao)
    let img = document.getElementsByClassName('dashboard__item__img')[item-1];
    // console.log(img)
    if (botao.classList.contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        img.classList.remove('dashboard__item__img--rented');
    } else {
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        img.classList.add('dashboard__item__img--rented');
    }
}

function confirmarDevolucao(item) {
    let botao = document.getElementsByClassName('dashboard__item__button')[item-1];
    let img = document.getElementsByClassName('dashboard__item__img')[item-1];
    if (botao.classList.contains('dashboard__item__button--return')) {
        if (confirm("Tem certeza que deseja devolver este item?")) {
            alterarStatus(item);
        }
    } else {
        alterarStatus(item);  
    }
    quantidadeItens();
}

function quantidadeItens() {
    let itens = document.getElementsByClassName('dashboard__item__img');
    let quantidade = 0;
    for (let i = 0; i < itens.length; i++) {
        // Se está alugado, tem a classe 'dashboard__item__img--rented'
        if (itens[i].classList.contains('dashboard__item__img--rented')) {
            quantidade++;
        }
    }
    console.log(`Itens alugados: ${quantidade}`);
}