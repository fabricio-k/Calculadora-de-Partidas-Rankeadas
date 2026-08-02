console.log("teste")

let resultado = contagem()
let nivel;
console.log(resultado)


function contagem(){
    let vitorias = 100000
    let derrotas = 10
    let diminui = vitorias - derrotas
    return diminui
}

if(resultado <= 10){
    nivel = "Ferro"
}else if(resultado >= 101  ){
    nivel = "imortal"
}

console.log(`O Herói tem saldo de ${resultado} está no nível de ${nivel}`)