
async function listaCamisas() {
    
    const conexao = await fetch("http://localhost:3000/Camisas");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criarCamisa(time, preco, imagem) {
    const conexao = await fetch("http://localhost:3000/Camisas", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            time: time,
            preco: preco,
            imagem: imagem
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo")
    }
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

//FUNÇÃO DE EXCLUIR CAMISA
async function excluirCamisa(id) {
    const conexao = await fetch(`http://localhost:3000/Camisas/${id}`, {
        method: "DELETE",
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível excluir a camisa");
    }
}

// Adicionar a função ao objeto exportado
export const conectaApi = {
    listaCamisas,
    criarCamisa,
    excluirCamisa
};

