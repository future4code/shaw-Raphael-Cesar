import { CoreTransformationContext } from "typescript"

// a)
const minhaString:string = "bom dia"

//b)

const meuNumero:number = 8

//C e D )

enum Cores {
    Azul,
    rosa,
    verde,
    roxo,
    laranja
}

type Person ={
    nome:string,
    idade:number,
    corFavorita: Cores
}

const person1:Person ={
    nome:"marcus",
    idade: 32,
    corFavorita: Cores.Azul
}

const person2:Person ={
    nome:"maria",
    idade: 3,
    corFavorita: Cores.rosa
}

const person3:Person ={
    nome:"carla",
    idade: 25,
    corFavorita: Cores.roxo
}