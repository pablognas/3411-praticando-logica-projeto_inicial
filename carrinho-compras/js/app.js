function adicionar(){
    let produto = document.getElementById('produto').value;
    produto = produto.split(' - ');
    let produtoNome = produto[0].trim();
    let produtoPreco = produto[1].trim();
    let quantidade = document.getElementById('quantidade').value;
    let carrinho = document.getElementsByClassName('carrinho__produtos__produto');
    let valorTotal = document.getElementById('valor-total');

    if (quantidade <= 0 || quantidade === ''){
        alert('Quantidade inválida!');
        return;
    }

    carrinho[0].innerHTML += `<br><span class="texto-azul">${quantidade}x</span> ${produtoNome} <span class="texto-azul">${produtoPreco}</span>`;

    produtoPreco = parseInt(produtoPreco.replace('R$', ''));
    let valorAtual = parseInt(valorTotal.innerHTML.replace('R$', ''));
    valorAtual += produtoPreco * quantidade;
    valorTotal.innerHTML = `R$${valorAtual}`;
    document.getElementById('quantidade').value = 0;
}

function limpar(){  
    if (confirm('Deseja limpar o carrinho?')){
        let carrinho = document.getElementsByClassName('carrinho__produtos__produto');
        carrinho[0].innerHTML = '';
        let valorTotal = document.getElementById('valor-total');
        valorTotal.innerHTML = 'R$0';
    }
}

let carrinho = document.getElementsByClassName('carrinho__produtos__produto');
carrinho[0].innerHTML = '';
let valorTotal = document.getElementById('valor-total');
valorTotal.innerHTML = 'R$0';