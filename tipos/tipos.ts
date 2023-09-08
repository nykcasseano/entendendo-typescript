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


