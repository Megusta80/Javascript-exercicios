function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5){
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25){
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30){
        return 'Acima do Peso';
    } else if (imc >= 30 && imc < 40){
        return 'Obesidade';
    } else{
        return 'Obesidade grave';
    }
    
}

/* A forma mais tradicional de invocar uma função seria:

function main() {
    const peso = 72;
    const altura = 1.79;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main();

Porém, existe uma maneira mais eficiente, chamamos de funções imediatamente invocadas.
*/

(function () {
    const peso = 72;
    const altura = 1.79;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();