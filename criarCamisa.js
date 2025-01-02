import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criarCamisa(evento) {
    evento.preventDefault();

    const time = document.querySelector("[data-time]").value;
    const preco = document.querySelector("[data-preco]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    try {
        await conectaApi.criarCamisa(time, preco, imagem);

    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener("submit", evento => criarCamisa(evento))