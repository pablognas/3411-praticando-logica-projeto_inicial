function checaPalindromo(palavra) {
    // Remove espaços e converte para minúsculas
    palavra = palavra.replace(/\s+/g, '').toLowerCase();
    
    // Verifica se a palavra é igual ao seu reverso
    return palavra === palavra.split('').reverse().join('');
}

function ordenaNumeros(numero1,numero2,numero3) {
    // Cria um array com os números
    let numeros = [numero1, numero2, numero3];
    
    // Ordena o array em ordem crescente
    numeros.sort((a, b) => a - b);
    
    // Retorna o array ordenado
    return numeros;
}

alert(checaPalindromo("arara")); // true
alert(checaPalindromo("Alura")); // false