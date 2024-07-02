let nome = "Lucas"
let xp = 4400
let rankDoHeroi = true
let consumir = true
let pocaoDeXp = 3
let inimigo = 5

    console.log("Bem-vindo herói " + nome)
    console.log("Antes de iniciar deseja consumir uma poção de xp? Quantidade: ", pocaoDeXp)

    
if (consumir){
   pocaoDeXp--
   xp += 1000
   console.log("Você consumiu uma poção de XP")
   console.log ("Agora você possui ", pocaoDeXp, " poções")
}
else{
    console.log("Você poderá consumir suas poções mais tarde")
    console.log (pocaoDeXp, " Poções disponiveis")
}


  


switch (rankDoHeroi){

    case (xp >= 0 && xp <= 1000):
        console.log("O seu rank de herói é Ferro")
        break


    case (xp >= 1001 && xp <= 2000):
        console.log("O seu rank de herói é Bronze")
        break


    case (xp >= 2001 && xp <= 5000):
        console.log("O seu rank de herói é Prata")
        break


    case (xp >= 5001 && xp <= 7000):
        console.log("O seu rank de herói é Ouro")
        break


    case (xp >= 7001 && xp <= 8000):
        console.log("O seu rank de herói é Platina")
        break


    case (xp >= 8001 && xp <= 9000):
        console.log("O seu rank de herói é Ascendente")
        break


    case (xp >= 9001 && xp <= 10000):
        console.log("O seu rank de herói é Imortal")
        break


    case (xp >= 10000):
        console.log("O seu rank de herói é Radiante")
        break


    default:
        console.log("Herói sem rank")

}



if (xp < 10000) {
    console.log ("Você não está no rank máximo")
}
else {
    console.log("Parabéns, você atingiu o rank máximo")
}


console.log("Você iniciou a missão e entrou na masmorra")

while (inimigo != 0){
    console.log("Inimigo derrotado")
    console.log("+20 XP")
    inimigo --
}
