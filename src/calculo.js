function calcularJurosCompostos(capitalInicial, taxaJuros, tempo, unidadeTempo = 'anos') {
    // Validação das entradas
    if (typeof capitalInicial !== 'number' || typeof taxaJuros !== 'number' || typeof tempo !== 'number') {
        throw new Error('Todos os parâmetros devem ser números.');
    }

    if (capitalInicial < 0 || taxaJuros < 0 || tempo < 0) {
        throw new Error('Os parâmetros não podem ser negativos.');
    }

    // Conversão de tempo para anos, se necessário
    if (unidadeTempo === 'meses') {
        tempo = tempo / 12;
    } else if (unidadeTempo === 'dias') {
        tempo = tempo / 365;
    }

    // Fórmula dos juros compostos: M = C * (1 + i)^t
    const montante = capitalInicial * Math.pow(1 + taxaJuros, tempo);
    return montante;
}
//a
module.exports = calcularJurosCompostos;