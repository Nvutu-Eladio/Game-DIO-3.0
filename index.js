class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    //Metódo para realizar o ataque
    atacar() {
        let ataque;

    //verificando o tipo do heroí e definindo o ataque
    switch (this.tipo) {
        case "mago":
            ataque = "magia"
            break;
        
        case "guerreiro":
            ataque = "espada"
            break;

        case "monge":
            ataque = "artes marciais"
            break;
        
        case "ninja":
            ataque = "shuriken"
            break;

            default:
                ataque = "um ataque desconhecido"
                break;
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
    }
}

const heroi1 = new Heroi("Herói1", 35, "mago")
const heroi2 = new Heroi("Herói2", 20, "guerreiro")

heroi1.atacar()
heroi2.atacar()