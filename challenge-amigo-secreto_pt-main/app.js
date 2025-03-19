//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let participantes = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (participantes.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    participantes.push(nome);
    atualizarLista();
    inputAmigo.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    participantes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (participantes.length < 2) {
        alert("Adicione pelo menos dois participantes para o sorteio!");
        return;
    }

    let sorteio = {};
    let disponiveis = [...participantes];

    participantes.forEach(nome => {
        let possiveis = disponiveis.filter(n => n !== nome); // Remove o próprio nome
        if (possiveis.length === 0) {
            alert("Erro no sorteio! Tente novamente.");
            return;
        }
        
        let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)];
        sorteio[nome] = sorteado;
        disponiveis = disponiveis.filter(n => n !== sorteado);
    });

    exibirResultado(sorteio);
}

function exibirResultado(sorteio) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "<h3>Resultados:</h3>";

    for (let amigo in sorteio) {
        let li = document.createElement("li");
        li.textContent = ${amigo} → ${sorteio[amigo]};
        listaResultado.appendChild(li);
    }
}
