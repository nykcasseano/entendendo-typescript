// let & Const

let seraQuePode = '?' // hoisting
console.log(seraQuePode)

let estaFrio = true //
if (estaFrio){
    let acao = "Colocar o Casaco"
    console.log(acao)
}


const cpf: string = '123.456.000-99'
// cpf = string
console.log(cpf)


var segredo = 'externo!'
function revelar(){
    const segredo = 'interno'
    console.log(segredo)

}
revelar()
console.log(segredo)

{
    {
        const def ='def'
        console.log(def)
    }
}

// Arrow Function 
function somar(n1: number, n2: number): number {
    return n1 + n2
}
console.log(somar(2, 2))

// const subtrair = (n1: number, n2:number): number => n1 - n2
// console.log(subtrair(2, 3))

// const saudacao =() => console.log('Olá')

// const falarCom = (pessoa: string) => console.log('Olá', + pessoa)
// falarCom('Joao')

// this

// function normalComThis() {
//     console.log(this)
// }
// normalComThis()

// const normalComThisEspecial = normalComThis
//     .bind({ nome: 'Ana' })
// normalComThisEspecial()

// // this???
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()

// const arrowComThisEspecial = arrowComThis
//     .bind({ nome: 'Ana' })
// arrowComThisEspecial()

