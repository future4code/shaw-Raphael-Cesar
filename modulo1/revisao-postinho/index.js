
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:
/*
function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
   return a === b
}
console.log(checarIgualdade(1,3))

// c-)Faça uma função chamada "verificaSeEMaior"

function verificaSeEMaior (a, b) {
   return a > b
}
     
console.log(verificaSeEMaior(321, 2156))
 */

// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1 ==='1'=

// b-) 1=='1'=
// c-) 'a'==='b'=
// d-) 'b'>'a'=
// e-) 0!==null=


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------
/*
const cadastro = () => {
    const usuario = []
    let nomeDoUsuario = prompt("Digite seu Nome!")
    let anoDeNascimento = Number(prompt("Digite o ano de nascimento!"))
    let senhaDoUsuario = prompt("Digite sua senha!")
    let nacionalidade1 = prompt("DIgite sua nacionalidade!")
    let nacionaliade1 = nacionalidade.toLowerCase()
    let idade = 2022 - anoDeNascimento
    let idUsuario = {
        nome: nomeDoUsuario, ano: anoDeNascimento, Nacionalidade: nacionalidade, senha: senhaDoUsuario
    }
   if ( idade >= 18 && senhaDoUsuario.length >= 6 && nacionalidade === "brasileiro"){
       return usuario.push(idUsuario)
   }else {
       return "não cumpriu todos os requisitos"
   }    
     
       return cadastro

      

}
console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    let coferirLogin = prompt("Digite sua senha!")
    if (coferirLogin === login){
        return "Usuário Logado"
    }else{
        return "Senha Inválida"
    }

}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {
let nome = prompt("Digite seu nome")
let vacina = prompt("Qual o nome da vacina que você tomou?")

 
if (vacina === Coronavac) {
    tempo = 28;
    data = 01/08/2021
 return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
}else
    if(vacina === Astrazenica){
        tempo = 90
        data = 01/11/2021
        return   `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
    }else
       if ( vacina === Pfizer){
           tempo = 90
           data = 01/11/2021
       }
}

    


console.log(primeiraDose())
*/
/*
// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    for( usuario of nomeDoUsuario){
        if (usuario.nome === usuarios.nome){
           usuario.imunizacao = "completo"
        }
    }
        
     return usuarios
   

}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

     for( let i = 0; usuarios.length; i++){
         if (usuarios[i].imunizacao === "incompleta"){
             console.log(`Olá ${n.nome}! Sua imunização está ${n.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
         }
     }

console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio()); */