// string 
var nome = ' joão';
console.log(nome); // João
// numbers
var idade = 27;
// idade = 'Ana'
idade = 27.5;
console.log(idade); //
//boolean
var possuiHobbies = false;
//possuiHobbies = 1
console.log(possuiHobbies);
//Tipos explícitos 
var minhaIdade;
minhaIdade = 30;
console.log(minhaIdade);
//array 
var hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies =100
console.log(hobbies);
// tuplas
var endereco = ["Av Principal", 99, "casa 2"];
endereco = [" Rua Principal", 99, "casa 2"];
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Cinza;
console.log(minhaCor);
console.log(Cor.Laranja);
// any 
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// funções 
function retornaMeuNome() {
    return nome;
}
function digaOi() {
    console.log('Olá'); // sem retorno
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB; // o valor de retorno é opcional e pode ser omitido
}
// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(2, 9));
// tipo funcão
var calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos
var usuario = {
    nome: 'Nyk',
    idade: 28
};
console.log(usuario);
var funcionario = {
    supervisores: ['Anna', 'Joana'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do Horário';
        }
    }
};
// Union Types
var nota = 10;
console.log("Minha nota \u00E9 ".concat(nota));
nota = '10';
console.log("Minha nota \u00E9 ".concat(nota));
//nota = true
// Chacando tipos
var valor = 30;
if (typeof valor === "number") {
    console.log('É um number'); // type is not assignable to a boolean value
}
else {
    console.log(typeof valor); /// Type '"Not a number"' is not assignable to type 'never'.ts(236
}
// never
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: -1,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha("Preço inválido!");
        }
    }
};
produto.validarProduto();
var altura = 12;
// altura = null
var alturaOpcional = 12;
alturaOpcional = null;
var contato1 = {
    nome: 'Fulano',
    tel1: '98765432',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
var podeSerNulo = null;
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'abc';
console.log(podeSerNulo);
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
