/* Estrutura básica de uma função 
function teste() {
    console.log('teste');
}

teste();  
Execução da função */

function sayMyName(name){
    console.log('Heinsenberg...');
    console.log('You are Goddamn right, ' + name);
}
sayMyName('Gus');

function quadrado(valor){
    return (valor * valor);
}

console.log(quadrado(10) * quadrado(10));

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100,10));