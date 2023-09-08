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
