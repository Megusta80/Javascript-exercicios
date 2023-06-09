/* O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

IMC em Adultos:
- Abaixo de 18.5 = Abaixo do peso;
- Entre 18.5 e menor que 25 = Peso normal;
- Entre 25 e menor que 30 = Acima do peso;
- Entre 30 e menor que 40 = Obesidade;
- Acima de 40 = Obesidade grave.
*/
const peso = 72;
const altura = 1.79;

const imc = peso / Math.pow(altura, 2);
console.log(imc.toFixed(2));

if (imc < 18.5){
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25){
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30){
    console.log('Acima do Peso');
} else if (imc >= 30 && imc < 40){
    console.log('Obesidade');
} else{
    console.log('Obesidade grave')
}