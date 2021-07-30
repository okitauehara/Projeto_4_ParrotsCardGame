function selecionarQuantidade() {
    let quantidade = Number(prompt("Com quantas cartas você quer jogar? Escolha um valor entre 4 e 14"));
    let cartas = document.querySelector(".cartas");
    let cartaAdicional = 0;
    let i = 0;
    let lista = [];
    let cartasJogaveis = [];

    while (quantidade < 4 || quantidade > 14 || quantidade % 2 !== 0 || !quantidade) {
        quantidade = Number(prompt("Com quantas cartas você quer jogar?"));
    }

    while (cartasJogaveis.length !== quantidade) {
        cartasJogaveis.push(cartaAdicional, cartaAdicional);
        cartaAdicional++;
    }

    let cartasEmbaralhadas = cartasJogaveis.sort(comparador);

    while (i < cartasEmbaralhadas.length) {
        lista += `<div class="carta" onclick="virarCarta(this);">
                            <div class="face verso">
                                <img src="img/front.png">
                            </div>
                            <div class="face frente">
                                <img src="img/${cartasEmbaralhadas[i]}.gif">
                            </div>
                         </div>`;
        i++;
    }

    cartas.innerHTML = lista;
}

selecionarQuantidade();

function comparador() { 
	return Math.random() - 0.5; 
}

function virarCarta(elemento) {
    let faces = elemento.getElementsByClassName("face");
    faces[0].classList.toggle("virado");
    faces[1].classList.toggle("virado");
}