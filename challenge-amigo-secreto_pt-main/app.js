let listaDeAmigos = [];

function adicionarAmigo() {
    let inputAmigo = document.querySelector("#amigo");
    let nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    listaDeAmigos.push(nomeAmigo);
    atualizarListaDeAmigos();
    inputAmigo.value = "";
}

function atualizarListaDeAmigos() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < listaDeAmigos.length; i++) {
        lista.innerHTML += `<li>${i + 1}. ${listaDeAmigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Por favor, insira um nome válido.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceSorteado];

    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>!</li>`;
}
