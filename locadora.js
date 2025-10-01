// Objeto para rastrear o status de cada filme
const statusFilmes = {};

function simularLocacao(filmeId, tipoAcao) {
    const statusElement = document.getElementById(`status-${filmeId}`);
    if (!statusElement) return;

    let mensagem = "";

    // Se já foi vendido
    if (statusFilmes[filmeId] === 1) {
        mensagem = `ERRO: O filme já foi VENDIDO e não está mais disponível.`;
        statusElement.textContent = mensagem;
        statusElement.classList.add('status-vendido');
        return;
    }

    if (tipoAcao === 'Emprestar') {
        mensagem = `SIMULAÇÃO: O filme foi EMPRESTADO por R$ 5,00. Aproveite!`;
        statusFilmes[filmeId] = 2;
        statusElement.classList.remove('status-vendido');
    } else if (tipoAcao === 'Vender') {
        mensagem = `SIMULAÇÃO: Parabéns! Você VENDEU este filme por R$ 30,00. Estoque esgotado!`;
        statusFilmes[filmeId] = 1;
        statusElement.classList.add('status-vendido');

        // Desabilitar botões após venda
        const botoes = statusElement.closest('.locadora-actions').querySelectorAll('button');
        botoes.forEach(btn => btn.disabled = true);
    }

    statusElement.textContent = mensagem;
    alert(mensagem);
}
