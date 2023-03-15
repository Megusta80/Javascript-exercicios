/* 

Faça um programa para calcular o valor gasto de um combustível em uma viagem.

Você terá 3 variáveis, sendo elas:
1 - Preço da gasolina;
2 - Preço do etanol;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por Km;
3 - Distância em Km da viagem.

Imprima no console o valor que será gasto de combustível para realizar esta viagem.

*/
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';


const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log('O valor gasto na viagem foi de R$', valorGasto.toFixed(2));

} else if (tipoCombustivel === 'Gasolina') {
    const valorGasto = litrosConsumidos * precoGasolina;

    console.log('O valor gasto na viagem foi de R$', valorGasto.toFixed(2));
}
else{
    console.log('Tipo de combustível inválido')
}

