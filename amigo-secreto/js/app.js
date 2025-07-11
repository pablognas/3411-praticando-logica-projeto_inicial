function adicionar(){
    // le o nome do amigo
    let amigo = document.getElementById('nome-amigo').value;
    // adiciona na lista de amigos incluidos
    let listaAmigos = document.getElementById('lista-amigos');
    // alert(`Lista de amigos: ${listaAmigos.textContent}`);
    if (listaAmigos.innerHTML == '') {
        listaAmigos.innerHTML = `<a href="#" onclick="remove('${amigo}')" id="${amigo}">${amigo}</a>`;
    } else {
        listaAmigos.innerHTML += `, <a href="#" onclick="remove('${amigo}')" id="${amigo}">${amigo}</a>`;
    }
    // listaAmigos.textContent += `${amigo}`;
    // alert(`Amigos na lista: ${listaAmigos.textContent}`);
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    // sorteia o amigo secreto para cada amigo
    let listaAmigos = document.getElementById('lista-amigos').textContent.split(', ');
    let listaDe = [];
    let listaPara = [];

    while (listaDe.length < listaAmigos.length) {
        let sorteadoDe = Math.floor(Math.random() * listaAmigos.length);
        let amigoDe = listaAmigos[sorteadoDe];

        while (listaDe.includes(amigoDe)){
            // sorteia novamente se o amigo já foi sorteado ou é o mesmo
            sorteadoDe = Math.floor(Math.random() * listaAmigos.length);
            amigoDe = listaAmigos[sorteadoDe];
        }
        let sorteadoPara = Math.floor(Math.random() * listaAmigos.length);
        let amigoPara = listaAmigos[sorteadoPara];
        while (listaPara.includes(amigoPara) || amigoDe === amigoPara) {
            // sorteia novamente se o amigo já foi sorteado ou é o mesmo
            sorteadoPara = Math.floor(Math.random() * listaAmigos.length);
            amigoPara = listaAmigos[sorteadoPara];
        }
        document.getElementById('lista-sorteio').innerHTML += `${amigoDe} -> ${amigoPara}<br>`;
        amigoDe = listaDe.push(amigoDe);
        amigoPara = listaPara.push(amigoPara);
        // alert(`Amigo: ${listaAmigos[i]}`)
        
    }
    // exibe o resultado do sorteio
}

// function knuthShuffle(array) {
//   let currentIndex = array.length;
//   let randomIndex;

//   // While there remain elements to shuffle.
//   while (currentIndex !== 0) {
//     // Pick a remaining element.
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // Swap it with the current element.
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }

//   return array;
// }

function reiniciar() {
    // limpa a lista de amigos incluidos
    document.getElementById('lista-amigos').textContent = '';
    // limpa o resultado do sorteio
    document.getElementById('lista-sorteio').innerHTML = '';
}

function remove(id) {
    let listaAmigos = document.getElementById('lista-amigos');
    let amigoRemover = document.getElementById(id);
    if (amigoRemover) {
        amigoRemover.remove();
        // Remove a vírgula que pode ficar sobrando
        listaAmigos.innerHTML = listaAmigos.innerHTML.replace(/(^, )|(, $)/g, '').replace(/,\s*,/g, ', ');
    }
}