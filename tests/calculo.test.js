const calcularJurosCompostos = require('../src/calculo.js');

// Teste 1: Cálculo com valores válidos
test('Calcula juros compostos corretamente para valores positivos', () => {
    expect(calcularJurosCompostos(1000, 0.05, 10)).toBeCloseTo(1628.89, 2);
});

// Teste 2: Validação de valores negativos
test('Lança erro para valores negativos', () => {
    expect(() => calcularJurosCompostos(-1000, 0.05, 10)).toThrow('Os parâmetros não podem ser negativos.');
});

// Teste 3: Validação de tipos de entrada
test('Lança erro para tipos de entrada inválidos', () => {
    expect(() => calcularJurosCompostos("1000", 0.05, 10)).toThrow('Todos os parâmetros devem ser números.');
});

// Teste 4: Cálculo com diferentes unidades de tempo
test('Calcula juros compostos corretamente para meses', () => {
    expect(calcularJurosCompostos(1000, 0.05, 120, 'meses')).toBeCloseTo(1647.01, 2);
});

test('Calcula juros compostos corretamente para dias', () => {
    expect(calcularJurosCompostos(1000, 0.05, 3650, 'dias')).toBeCloseTo(1648.66, 2);
});