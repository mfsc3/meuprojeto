function respostaPer(respostaPergunta) {
    if (respostaPergunta === 'Sim') {
        
        var gifContainer = document.getElementById("gifContainer");
            gifContainer.style.display = "block";
        var texto = document.createElement("p");
        // Define o texto do parágrafo
        texto.textContent = "Eu te amo muito muito muito Meu Amor!!!";
        // Adiciona o parágrafo à página
        document.body.appendChild(texto);

    
    }
}
