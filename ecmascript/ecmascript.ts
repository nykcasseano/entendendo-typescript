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