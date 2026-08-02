let resultado = contagem(120,10)
let nivel;
console.log(resultado)


function contagem(vitorias, derrotas){
    let diminui = vitorias - derrotas
    return diminui
}

if(resultado <= 10){
    nivel = "Ferro"
}else if(resultado >= 101  ){
    nivel = "Imortal"
}
switch(true){
    case resultado >=11 && resultado <= 20:
        nivel = "Bronze"
        break;

    case resultado >=21 && resultado <= 50:
        nivel = "Prata"
        break;
    case resultado >= 51 && resultado <= 80:
        nivel = "Ouro"
        break;
    case resultado >= 81 && resultado <= 90:
            nivel = "Diamante"
            break
    case resultado >= 91 && resultado <= 100:
            nivel = "Lendário"
            break
    }


console.log(`O Herói tem saldo de ${resultado} está no nível de ${nivel}`)