//         Exercícios de interpretação de código


/*
1)

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

sao buscado valores para ser feito a Soma. sera impresso o numero 10.


2)

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

// a) sera impresso no console todos os numeros da lista q forem maior que 18.


3)


const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

// seria impresso as linhas de asterisco. (*,**,***,****)


      Exercícios de escrita de código


1)


let qntPets = []
const pets = Number(prompt("Digite quantos pets tem!"))
let i =0

if (pets === 0){
   console.log("Que pena! Voce pode adotar um pet!")
}
else {
    while (i < pets) {
      nomes = prompt("Qual o nome dele?")
      qntPets.push(nomes)
       i++
         

    }
}
console.log(qntPets)

2)
*/
const lista =[8, 9, 12, 14, 15, 17, 18, 19, 21, 22]

