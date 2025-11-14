let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    if(amigo.value == ''){
        alert('Informe um nome válido!');
        return;
    }

    if(amigos.includes(amigo.value)){
        alert('Nome já adicionado!');
        return;
    }


    let lista = document.getElementById('lista-amigos');

    amigos.push(amigo.value);

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    amigo.value = '';
}



function sortear() {
    // CRIAR METODO PARA NÃO DEIXAR SORTEAR, SE O TAMANHO FOR MENOR QUE 4
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    if(amigos.length < 4){
        alert('O mínimo de jogadores é de 4 jogadores!');
        return;
    }


    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length -1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + "<br>"


        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + "<br>"
        }
    }

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}





function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';


}