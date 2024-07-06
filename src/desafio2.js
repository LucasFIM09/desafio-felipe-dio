let rankFinal = true
let saldo = rank(105, 5)
let rankDoJogador = saldo 

function rank(vitorias, derrotas){

    let rankMedia = vitorias - derrotas
    console.log (`A média sera feita subtraindo a quantidade de vitorias e derrotas, constando no saldo = ${rankMedia}`)   
    return rankMedia
}


switch (rankFinal) {
    case (rankDoJogador >= 0 && rankDoJogador <= 10):
        rankDoJogador = "Ferro"
    break 

    case (rankDoJogador >= 11 && rankDoJogador <= 20):
        rankDoJogador = "Bronze"
    break

    case (rankDoJogador >= 21 && rankDoJogador <= 50):
        rankDoJogador = "Prata"
    break

    case (rankDoJogador >= 51 && rankDoJogador <= 80):
        rankDoJogador = "Ouro"
    break

    case (rankDoJogador >= 81 && rankDoJogador <= 90):
        rankDoJogador = "Diamante"
    break

    case (rankDoJogador >= 91 && rankDoJogador <= 100):
        rankDoJogador = "Lendário"
    break

    case (rankDoJogador >= 101):
        rankDoJogador = "Imortal"
    break
    
}


console.log("O héroi está no saldo de:", saldo, "E está no nivel de:", rankDoJogador)


