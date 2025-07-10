function cadastrar() {
    let nome = document.getElementById('nome').value;
    let nivel = document.getElementById('nivel').value;
    let classe = document.getElementById('classe').value;
    let raca = document.getElementById('raca').value;

    if (nome && nivel && classe && raca) {
        alert(`Personagem ${nome} da raça ${raca} e com a classe ${classe} de nível ${nivel} cadastrado com sucesso!`);
        document.getElementById('nome').value = '';
        document.getElementById('nivel').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }    
}
