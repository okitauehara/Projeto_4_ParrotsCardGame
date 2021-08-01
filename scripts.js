// Função para início do jogo //

function selecionarQuantidade() {
    let quantidade = Number(prompt("Com quantas cartas você quer jogar? Escolha um valor entre 4 e 14"));
    let campo = document.querySelector(".cartas");
    let cartasJogaveis = [];
    let carta = 0;
    let lista = [];
    let i = 0;

    // Laço para garantir que o usuário irá selecionar um valor válido //

    while (quantidade < 4 || quantidade > 14 || quantidade % 2 !== 0 || !quantidade) {
        quantidade = Number(prompt("Com quantas cartas você quer jogar?"));
    }

    // Laço para adicionar os pares na array //

    while (cartasJogaveis.length !== quantidade) {
        cartasJogaveis.push(carta, carta);
        carta++;
    }

    // Embaralhar números para adicionar no jogo //

    let cartasEmbaralhadas = cartasJogaveis.sort(comparador);

    // Adicionar cartas ao jogo aleatoriamente //

    while (i < cartasEmbaralhadas.length) {
        lista += `<div class="carta">
                            <div class="face verso">
                                <img src="img/front.png">
                            </div>
                            <div class="face frente">
                                <img src="img/${cartasEmbaralhadas[i]}.gif">
                            </div>
                         </div>`;
        i++;
    }

    campo.innerHTML = lista;
}

selecionarQuantidade();

// Função para embaralhar as cartas //

function comparador() { 
	return Math.random() - 0.5; 
}

// Adicionar eventos para o clique na carta //

let card = document.getElementsByClassName("carta");
let cartas = [...card];
let cartasAbertas = [];

cartas.forEach(card => card.addEventListener("click", mostrarCarta))
cartas.forEach(card => card.addEventListener("click", compararCartas))

// Função para virar a carta //

let faces;

function mostrarCarta() {
    faces = this.getElementsByClassName("face");
    faces[0].classList.add("virado");
    faces[1].classList.add("virado");
}

// Função para comparar as duas cartas clicadas //

function compararCartas() {
    cartasAbertas.push(this);

    let comprimento = cartasAbertas.length;

    if (comprimento === 2) {
        if (cartasAbertas[0].lastElementChild.firstElementChild.outerHTML !== cartasAbertas[1].lastElementChild.firstElementChild.outerHTML) { // Comparar os src das cartas para verificar se são pares //
            cartasDiferentes();
        } else {
            cartasIguais();
        }
    }
}

// Função acionada caso as cartas comparadas sejam diferentes //

function cartasDiferentes() {
    setTimeout(function() {
        cartasAbertas[0].childNodes[1].classList.remove("virado");
        cartasAbertas[0].childNodes[3].classList.remove("virado");
        cartasAbertas[1].childNodes[1].classList.remove("virado");
        cartasAbertas[1].childNodes[3].classList.remove("virado");
        cartasAbertas = [];
    }, 1000);
}

// Função acionada caso as cartas comparadas sejam iguais

function cartasIguais() {
    cartasAbertas = [];
}
