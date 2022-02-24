//  Exercícios de interpretação de código

/*
1)
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

Sera imprimido Matheus Nachtergaele e sera transmitido globo e horario 14h.

2) 
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
 
Sera impresso para o cachorro o nome juca, a idade 3 e a raça SRD. Para o gato tera os mesmos dados do cachorro.
ja a tartaruga mantem os dados de idade e raça igual aos anteriores, porem, o nome muda para jubo.

a sintaxe dos 3 pontinhos é para fazer a copia de um objeto existente.

3)


function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) 
console.log(minhaFuncao(pessoa, "altura"))

 no primeiro console dará false e o segundo sera undefined por que nao há valor para altura.
*/

//     Exercícios de escrita de código

/*

1) 

a) 


const pessoa = {
    nome: "Raphael",
    apelido: ["rapha", "phael", "raphinha"],

}
function imprimir (pessoa) {
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido[0]}, ${pessoa.apelido[1]} ou ${pessoa.apelido[2]}`)
}

b)
const novoApelido ={
	...pessoa,
	apelido1: ["raphao", "rafa", "rafinha"]
}
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${novoApelido.apelido1[0]}, ${novoApelido.apelido1[1]} ou ${novoApelido.apelido1[2]}`)

2)


const pessoa1 ={
	nome: "Messi",
	idade: 34,
	profissao: "futebolista"
}

const pessoa2 ={
	nome: "Salah",
	idade: 29,
	profissao: "futebolista"
}

function retornararray(pessoa) {
	const infosPessoa = [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length ]

return infosPessoa
}
console.log(retornararray(pessoa1))
console.log(retornararray(pessoa2))

3)
*/

const frutas = []

const fruta1 = {
	nome: "goiaba",
	disponivel: true
}

const fruta2 = {
	...fruta1,
	nome: "maracuja"
}

const fruta3 ={
	...fruta1,
	nome: "maça"
}

function adicionarcarrinho(carrinho){
	frutas.push(carrinho)
}

adicionarcarrinho(fruta1)
adicionarcarrinho(fruta2)
adicionarcarrinho(fruta3)

console.log(frutas)
