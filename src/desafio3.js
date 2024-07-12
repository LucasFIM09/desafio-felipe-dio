
class info{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque
        switch(this.tipo){
            case "Mago":
            ataque = "Magia"
            break

            case "Guerreiro":
            ataque = "Espada"
            break

            case "Monge":
            ataque = "Artes Marciais"
            break

            case "Ninja":
            ataque = "Shuriken"
            break

        
        }
        console.log (`O ${this.tipo} atacou usando ${ataque}` )
    }
}

let personagem = new info("Lucas", 19, "Monge")
let personagem2 = new info("NPC aliado", 22, "Ninja")

console.log(personagem)
personagem.atacar()

console.log(personagem2)
personagem2.atacar()





