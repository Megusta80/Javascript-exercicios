/* 

Faça um programa para calcular o valor gasto de um combustível em uma viagem.

Você terá 3 variáveis, sendo elas:
1 - Preço do combustível;
2 - Valor médio de gasto do carro por KM;
3 - Distância em Km da viagem.

Imprima no console o valor que será gasto de combustível para realizar esta viagem.

*/
const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel

console.log('O valor gasto na viagem foi de R$', valorGasto.toFixed(2));
