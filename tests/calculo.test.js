const calcularJurosCompostos = require('../src/calculo.js');

// Teste 1: Cálculo com valores válidos
test('Calcula juros compostos corretamente para valores positivos', () => {
    expect(calcularJurosCompostos(1000, 0.05, 10)).toBeCloseTo(1628.89, 2);
});

// Teste 2: Validação de valores negativos
test('Lança erro para valores negativos', () => {
    expect(() => calcularJurosCompostos(-1000, 0.05, 10)).toThrow('Os parâmetros não podem ser negativos.');
});