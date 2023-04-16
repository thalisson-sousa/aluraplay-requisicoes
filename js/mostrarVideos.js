import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement('li');
    video.className = "videos__item";
    video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
        title="${titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>
    `
    return video;
}

async function listaVideos() {
    try {
        const listaApi = await conectaApi.listaVideos();
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
    } catch {
        lista.innerHTML = `<h2 class="mensagem__erro"><img src="https://img.freepik.com/vetores-gratis/ups-erro-404-com-ilustracao-de-conceito-de-robo-quebrado_114360-5529.jpg?w=740&t=st=1681657969~exp=1681658569~hmac=5435ba9babfad94a545c43bb820eb25df21bb2170db10a22826c5b92d6bbb33e" alt="">
        Não foi possivel carregar a Lista de Videos!</h2>`
        window.document.body.style.background = "white"
    }
}

listaVideos();