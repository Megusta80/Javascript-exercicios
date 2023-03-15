/* Criação de uma classe */
const gustavo = {
    nome: 'Gustavo Henrique',
    idade: 18,
    /* Função dentro de um objeto se chama método */
    descrever: function () {
        console.log('Meu nome ${this.nome} e minha idade é ${this.idade}');
    }
    
};

gustavo.descrever = function() {
    console.log('Meu nome é ${this.nome}');
}

gustavo.descrever();

/* Incrementação */
gustavo.altura = 1.69;

gustavo.peso = 80;

delete gustavo.peso;

console.log(gustavo.nome);
console.log(gustavo.idade);
console.log(gustavo.altura);
console.log(gustavo);