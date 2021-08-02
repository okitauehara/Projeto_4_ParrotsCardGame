// Variáveis globais //
let quantidade;
let faces;
let acertouPar = 0;
let jogadas = 0;

// Função para início do jogo //
function selecionarQuantidade() {
    quantidade = Number(prompt("Com quantas cartas você quer jogar? Escolha um valor entre 4 e 14"));
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

// Função para virar a carta //
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
        if (cartasAbertas[0].lastElementChild.firstElementChild.outerHTML !== cartasAbertas[1].lastElementChild.firstElementChild.outerHTML) { // Comparar os src das cartas para verificar se são pares. (div carta.face frente.img.src) //
            cartasDiferentes();
        } else {
            cartasIguais();
        }
    }
}

// Função acionada caso as cartas comparadas sejam diferentes //
function cartasDiferentes() {
    setTimeout(function() {
        cartasAbertas[0].childNodes[1].classList.remove("virado"); //div.face.verso.virado
        cartasAbertas[0].childNodes[3].classList.remove("virado"); //div.face.frente.virado
        cartasAbertas[1].childNodes[1].classList.remove("virado"); //div.face.verso.virado
        cartasAbertas[1].childNodes[3].classList.remove("virado"); //div.face.frente.virado
        cartasAbertas = [];
    }, 1000);
}

// Função acionada caso as cartas comparadas sejam iguais
function cartasIguais() {
    cartasAbertas = [];
    acertouPar++;
}

// Função para contabilizar jogadas, sendo que cada vez que o usuário vira uma carta equivale a uma jogada //
function adicionarContador() {
    jogadas ++;
    console.log(jogadas)
}

// Função para comparar se o número de pares acertados é igual ao total de cartas no jogo dividido por 2 //
function fimJogo() {
    setTimeout(function() {
        if (acertouPar === quantidade / 2) {
            alert (`Você ganhou em ${jogadas} jogadas!`)
        }
    }, 500)
}

// Adicionar eventos para o clique na carta //
let card = document.getElementsByClassName("carta");
let cartas = [...card];
let cartasAbertas = [];

cartas.forEach(card => card.addEventListener("click", mostrarCarta));
cartas.forEach(card => card.addEventListener("click", compararCartas));
cartas.forEach(card => card.addEventListener("click", adicionarContador));
cartas.forEach(card => card.addEventListener("click", fimJogo));

