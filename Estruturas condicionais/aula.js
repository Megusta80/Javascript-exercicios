const numero = 3;

const numeroPar = (numero % 2) === 0;
console.log(numeroPar);

if (numeroPar) {
    console.log('O número ', numero,'é par');
} else {
    console.log('O número ', numero,'é ímpar')
}

const numero2 = 10;

const numeroDivisivelPor5 = (numero2 % 5) === 0;
if (numero2 === 0){
    console.log('Numeração inválida');
} else if (numeroDivisivelPor5) {
    console.log('O Número ', numero2,' é divisível por 5');
} else {
    console.log('O Número ', numero2,' não é divisível por 5');
} 

