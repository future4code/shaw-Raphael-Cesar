//     Exercícios de interpretação de código

/*
1)

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

a) o codigo vai informar se o numero dado pelo usuario é par ou impar. sendo par o numero passa no TextDecoderStream, ja o impar nao passa.
b) para passar no teste o numero tera que ser par.
c) para nao passar no teste o numero precisa ser impar.


2)

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
     break // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


a) serve para informar o valor da fruta digita pelo usuario
b)  o preço da fruta maçã é R$ 2.25. 
c) o preço da fruta pêra é 5.

3)

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)


a) é dada a condição para o numero de fornecido pelo usuario.
b) para o numero 10, a mensagem sera que esse numero passou no teste. para o numero -10 aparece q essa mensagem é secreta.

*/

//      Exercícios de escrita de código

/*

1) 

const idade = Number(prompt("Digite sua idade!"))
     if(idade >= 18){
        console.log("Você pode dirigir!")
     }else{
        console.log("Você não pode dirigir!")
     }


2)


const turno = prompt("Qual o turno de seu estudo?. Digite M para matutino, V para o vespertino e N para o noturno!")
      if (turno === "M" ){
        console.log("Bom dia!")
      }else if(turno === "V"){
        console.log("Boa tarde!")
      }else{
        console.log("Boa noite!")
    }
  

3)


const turno = prompt("Qual o turno de seu estudo?. Digite M para matutino, V para o vespertino e N para o noturno!")

      switch (turno){
        case "M":
          console.log("Bom dia!")
          break;
        case "V":
          console.log("Boa tarde!")
          break;
        default:
          console.log("Boa noite!")
      }

4)



const filme = prompt("Qual o genero você quer assistir?") 
const valor = prompt("Qual o valor do ingresso?")
const genero = filme
const ingresso = valor <= 15

       if (genero && ingresso){
         console.log("Bom filme!")
         console.log(`Aproveite o seu`,prompt("Qual é o lanchinhoe que vai comprar?"))
        }else{
         console.log("Escolha outro genero! :(")
       }


//   Desafios

1)


const filme = prompt("Qual o genero você quer assistir?") 
const valor = prompt("Qual o valor do ingresso?")
const genero = filme
const ingresso = valor <= 15


       if (genero && ingresso){
         console.log("Bom filme!")
         console.log(`Aproveite o seu`, prompt("Qual lanchinho você vai compra?"))
        }else{
         console.log("Escolha outro genero! :(")
       }
       

2)*/