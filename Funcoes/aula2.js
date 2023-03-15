function escrevaNome(nome) {
    console.log('Seja bem-vindo(a) ao curso de Javascript, ' + nome + '!');
}

function escrevaNome2(nome) {
    return nome;

}

escrevaNome('Joana');
escrevaNome('Pedro');

function verificarIdade(idade) {
    if (idade < 18) {
        console.log(escrevaNome2('Joana') + ', você é menor de idade.');
    }
    else {
        console.log(escrevaNome2('Joana') + ', você é maior de idade.');
    }
}

verificarIdade(28);