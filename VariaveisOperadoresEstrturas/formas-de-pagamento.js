/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- Opção 1) À vista Débito, recebe 10% de desconto;
- Opção 2) À vista no dinheiro ou PIX, recebe 15% de desconto;
- Opção 3) Em 2x, preço normal de etiqueta sem juros;
- Opção 4) Acima de duas vezes, preço normal de etiqueta mais juros de 10%. */

const precoProduto = 100.00;
const formaPagamento = 4;
if (formaPagamento === 1) {
    console.log('Pagamento à vista Débito, desconto de 10% aplicado; Valor: R$ ', precoProduto - (precoProduto * 0.1))
} else if (formaPagamento === 2) {
    console.log('Pagamento à vista Dinheiro ou PIX, desconto de 15% aplicado; Valor: R$ ', precoProduto - (precoProduto * 0.15))
} else if (formaPagamento === 3) {
    console.log('Parcela em 2x, sem desconto ou juros aplicado; Valor: R$ ', precoProduto / 2,' por mês');
} else{
    console.log('Parcelas com juros; Valor (Total) R$ ',precoProduto + (precoProduto * 0.1))
}

