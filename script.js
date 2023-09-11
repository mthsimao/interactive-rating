let thanks = document.querySelector('div#card-thanks')
thanks.style.display = "none"

let card = document.querySelector('div#card')

document.addEventListener("DOMContentLoaded", function () {
    const lista = document.getElementById("lista");
    const resultado = document.querySelector("div.res-txt");
    const submitBtn = document.getElementById("submitBtn");

    let itemSelecionado = null;

    // Adicionar um ouvinte de evento de clique para cada <li>
    const itens = lista.querySelectorAll("li");
    itens.forEach(function (item) {
        item.addEventListener("click", function () {
            // Remove a classe de seleção de todos os itens
            itens.forEach(function (i) {
                i.classList.remove("selecionado");
            });

            // Adiciona uma classe de seleção ao item clicado
            item.classList.add("selecionado");
            itemSelecionado = item.textContent;
        });
    });

    // Ouvinte de evento para o botão "Submit"
    submitBtn.addEventListener("click", function () {
        if (itemSelecionado) {
            resultado.textContent = `You selected ${itemSelecionado} out of 5`;

            thanks.style.display = "inline-flex"

            card.style.display = "none"
        } else {
            alert('Please select a number.')
        }
    });
});