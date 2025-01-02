
import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(time, preco, imagem, id) {
    const camisa = document.createElement("li");
    camisa.className = "camisas__item";
    camisa.innerHTML = 
    `<div class="descricao-camisas">
        <img src="${imagem}" alt="camisa do time">
        <h3>Time: ${time}</h3>
        <p>Valor: ${preco}</p>
        <button class="btn-excluir" data-id="${id}">Excluir</button>
    </div>`;

    // Adiciona o evento de clique para o botão de excluir
    camisa.querySelector(".btn-excluir").addEventListener("click", () => {
        excluirCamisa(id, camisa);
    });

    return camisa;
}

async function listaCamisas() {
    try {
        const listaApi = await conectaApi.listaCamisas();
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.time, elemento.preco, elemento.imagem, elemento.id)
        ));
    } catch {
        lista.innerHTML = `<h3 class="mensagem__titulo">Não foi possível carregar a lista de Camisas</h3>`;
    }
}

async function excluirCamisa(id, camisaElement) {
    try {
        await conectaApi.excluirCamisa(id); // Função que você precisa implementar na conectaApi.js
        lista.removeChild(camisaElement);
    } catch (e) {
        alert("Não foi possível excluir a camisa.");
    }
}

listaCamisas();