// Função para calcular juros compostos
function calcularJurosCompostos(capitalInicial, taxaJuros, tempo) {
    // Fórmula dos juros compostos: M = C * (1 + i)^t
    const montante = capitalInicial * Math.pow(1 + taxaJuros, tempo);
    return montante;
}

module.exports = calcularJurosCompostos;