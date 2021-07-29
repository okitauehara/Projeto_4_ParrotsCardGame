function selecionarQuantidade() {
    let quantidade = Number(prompt("Com quantas cartas você quer jogar?"));
    let cartas = document.querySelector(".cartas");
    let i = 0;
    let lista = [];

    while (quantidade < 4 || quantidade > 14 || quantidade % 2 !== 0 || !quantidade) {
        quantidade = Number(prompt("Com quantas cartas você quer jogar?"));
    }

    while (i < quantidade) {
        lista += `<div class="carta">
            <div class="face verso">
                <img src="img/front.png">
            </div>
            <div class="face frente">
                <img src="img/${i}.gif">
            </div>
        </div>`
        i++;
    }

    cartas.innerHTML = lista;
    console.log(lista, lista.length);
}

selecionarQuantidade();