import { db } from './firebase-config.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9/firebase-firestore.js";

const form = document.getElementById('formCadastroProduto');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Captura os dados exatamente como nos seus prints
    const produto = {
        nome: document.getElementById('nome').value,
        marca: document.getElementById('marca').value,
        ordem: Number(document.getElementById('ordem').value),
        secao: document.getElementById('secao').value,
        imgUrl: document.getElementById('imgPrincipal').value,
        variacao: {
            tamanho: document.getElementById('vCor').value,
            preco: Number(document.getElementById('vPreco').value),
            estoque: Number(document.getElementById('vEstoque').value)
        },
        descPix: document.getElementById('descPix').value,
        descCartao: document.getElementById('descCartao').value,
        descricao: document.getElementById('descricao').value,
        dataCadastro: new Date()
    };

    try {
        await addDoc(collection(db, "produtos"), produto);
        alert("Produto salvo com sucesso no Firebase!");
        form.reset();
    } catch (error) {
        console.error("Erro ao salvar:", error);
        alert("Erro ao salvar produto.");
    }
});
