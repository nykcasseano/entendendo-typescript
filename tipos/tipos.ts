// string 
let nome: string =  ' joão'
console.log(nome) // João

// numbers
let idade: number = 27 
// idade = 'Ana'
idade = 27.5
console.log(idade) //

//boolean
let possuiHobbies: boolean = false
//possuiHobbies = 1
console.log(possuiHobbies) 

//Tipos explícitos 
let minhaIdade: number
minhaIdade =  30;
console.log(minhaIdade)

//array 
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)
hobbies = [100, 200,300]
// hobbies =100
console.log(hobbies);


// tuplas
let endereco: [string, number, string] = ["Av Principal", 99, "casa 2"]

endereco = [" Rua Principal", 99, "casa 2"]

// enums

enum Cor { 
    Cinza,
    Verde = 100,
    Azul = 10,
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Cinza;
console.log(minhaCor)
console.log(Cor.Laranja) 

// any 
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano:2019}
console.log(carro)

// funções 

function retornaMeuNome(): string {
    return nome
}
function digaOi(): void {
    console.log('Olá')    // sem retorno
}
digaOi()


function multiplicar(numA: number, numB: number): number {
    return numA * numB  ; // o valor de retorno é opcional e pode ser omitido
}

// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(2, 9))


// tipo funcão

let calculo: (x: number, y: number) => number
// calculo = digaOi
// calculo()

calculo = multiplicar
console.log(calculo(5, 6));


// objetos

let usuario: { nome: string, idade: number} = {
    nome: 'Nyk',
    idade:  28
    
}

console.log(usuario)

// usuario ={}

// usuario = {
//  name: 'Maria',
//  idade: 31  
//}


// Desafio
/*
    Criar um objeto funcionário com:
        - Array de strings com os nomes dos surpevisores
        - Função de bater ponto que recebe a hora (número)
            e retorna uma string
            -> Ponto normal (<= 8)
            -> Fora do horário (> 8)
*/


// Resposta
/*
let funcionario: {
    supervisores:string[],
    baterPonto: (horas: number) => string
} = {
    supervisores : ['Anna','Joana'],
    baterPonto(horario: number): string{
        if(horario <= 8){
            return 'Ponto Normal'
        } else {
        return 'Fora do Horário' 
        }
    }
}    

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))
*/
// Tipo especifico 
// alias
type Funcionario = {
    supervisores:string[],
    baterPonto: (horas: number) => string
}


let funcionario: Funcionario = {
    supervisores : ['Anna','Joana'],
    baterPonto(horario: number): string{
        if(horario <= 8){
            return 'Ponto Normal'
        } else {
        return 'Fora do Horário' 
        }
    }
}  


// Union Types

let nota: number | string = 10
console.log(`Minha nota é ${nota}`)
nota = '10'
console.log(`Minha nota é ${nota}`)
//nota = true


// Chacando tipos

let valor = 30

if (typeof valor  === "number"){
    console.log('É um number')       // type is not assignable to a boolean value
} else {
    console.log(typeof valor)     /// Type '"Not a number"' is not assignable to type 'never'.ts(236
}

// never
function falha(msg: string): never {
    throw new Error(msg);
}

const produto = {
    nome: 'Sabão',
    preco: -1,
    validarProduto(){
        if(!this.nome || this.nome.trim().length==0){
            falha('Precisa ter um nome')
        }
        if(this.preco <=0){
            falha("Preço inválido!")
        }
    }
}