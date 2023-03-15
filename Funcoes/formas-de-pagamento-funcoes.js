/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- Opção 1) À vista Débito, recebe 10% de desconto;
- Opção 2) À vista no dinheiro ou PIX, recebe 15% de desconto;
- Opção 3) Em 2x, preço normal de etiqueta sem juros;
- Opção 4) Acima de duas vezes, preço normal de etiqueta mais juros de 10%. */

function aplicarDesconto(valor, desconto) {
    return (valor - (valor *  (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * juros / 100))
}

const precoProduto = 100.00;

function formaPagamento(opcao) {
    if (opcao === 1) {
        console.log('Pagamento à vista Débito, desconto de 10% aplicado; Valor: R$ ' + aplicarDesconto(precoProduto, 10));
    } else if (opcao === 2) {
        console.log('Pagamento à vista Dinheiro ou PIX, desconto de 15% aplicado; Valor: R$ ', aplicarDesconto(precoProduto, 15));
    } else if (opcao === 3) {
        console.log('Parcela em 2x, sem desconto ou juros aplicado; Valor: R$ ' + precoProduto / 2,' por mês');
    } else{
        console.log('Parcelas com 10% de juros; Valor R$ ' + aplicarJuros(precoProduto, 10))
    }
    
}

formaPagamento(1);
