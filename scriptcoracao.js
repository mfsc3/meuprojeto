const imagem = document.getElementById('imagem');
let posX = 0;
let posY = 0;
let movimentoX = 1;
let movimentoY = 1;

function moverImagem() {
    // Obtém as dimensões da janela do navegador
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    // Move a imagem na horizontal
    posX += movimentoX;
    imagem.style.left = posX + 'px';

    // Move a imagem na vertical
    posY += movimentoY;
    imagem.style.top = posY + 'px';

    // Verifica se a imagem atingiu as bordas horizontais e muda a direção
    if (posX + imagem.width >= larguraJanela || posX <= 0) {
        movimentoX *= -1;
    }

    // Verifica se a imagem atingiu as bordas verticais e muda a direção
    if (posY + imagem.height >= alturaJanela || posY <= 0) {
        movimentoY *= -1;
    }

    // Chama a função moverImagem novamente após um intervalo de tempo
    requestAnimationFrame(moverImagem);
}

// Inicia a animação
moverImagem();
