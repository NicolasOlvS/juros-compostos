# Calculadora de Juros Compostos

## Descrição Detalhada
Este projeto é uma calculadora de juros compostos que permite calcular o montante final de um investimento com base em um capital inicial, uma taxa de juros e um período de tempo. A calculadora suporta diferentes unidades de tempo (anos, meses, dias) e inclui validações para garantir que os parâmetros de entrada sejam números positivos.

## Funcionalidades
- Cálculo de juros compostos.
- Validação de entradas (números positivos e tipos corretos).
- Suporte para diferentes unidades de tempo (anos, meses, dias).
- Testes automatizados para garantir a precisão dos cálculos.

## Exemplos de Entrada e Saída

### Exemplo 1: Cálculo em anos

**Entrada:**
calcularJurosCompostos(1000, 0.05, 10);

**Saída esperada:**
1628.89

### Exemplo 2: Cálculo em meses

**Entrada:**
calcularJurosCompostos(1000, 0.05, 120, 'meses');

**Saída esperada:**
1647.01

## Como rodar o código localmente 

git clone https://github.com/seu-usuario/juros-compostos.git
cd juros-compostos
npm install
npm test

**use a função no seu código::**
const { calcularJurosCompostos } = require('./src/calculo.js');
console.log(calcularJurosCompostos(1000, 0.05, 10)); // 1628.89
