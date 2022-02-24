// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------
/*
// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo(){
  // implemente sua lógica aqui
  const altura = prompt("digite um valor!")
  const largura = prompt("digite um valor !")
  resultado = altura * largura
  console.log(resultado)
 }
 
 


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Digite o ano de atual!")
  const anoNascido = prompt("Digite o ano nascimento!")
  resultado = anoAtual - anoNascido
  console.log(resultado)

}
 
// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 const imc = peso/(altura*altura)

 return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  let nome = prompt("digite o seu nome!")
  let idade = prompt("digite sua idade!")
  let email = prompt("digite seu email!")
  const frase = ` Meu nome é ${nome}, tenho ${idade} anos, e o meu é ${email}.`
    
  console.log(frase )
}




// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("Digite uma cor favorita!")
const cor2 = prompt("Digite outra cor favorita!")
const cor3 = prompt("Digite outra cor favorita!")
const cores =[cor1, cor2, cor3]
console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
 const palavras = prompt ("Digite uma palavra!")
 const palavrasMaiuscula = palavras.toUpperCase()
 console.log(palavrasMaiuscula)
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const resposta = custo / valorIngresso
console.log(resposta)
}

// EXERCÍCIO 08 
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const condicao = string1 !== string2
  
  console.log(condicao)  
}


// EXERCÍCIO 09 
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
 
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
 
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui


// EXERCÍCIO 12 
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const condicao = string1 !== string2
  
  console.log(condicao)  
}

// EXERCÍCIO 13 
function checaRenovacaoRG() {
  // implemente sua lógica aqui
 const anoAtual = prompt("Digite o ano atual!")
 const anoDoNascimento = prompt("Digite o ano de nascimento!")
 const anoEmissao = prompt("Digite o ano da emissao da rg!")
 const idade = anoAtual - anoDoNascimento
 const validadeDeRg = anoAtual - anoEmissao
 
 renova = (idade <= 20 && validadeDeRg >= 5) || ((idade > 20 && idade <= 50) && validadeDeRg) || (idade > 50 && validadeDeRg >= 15)
console.log(renova)
}




// EXERCÍCIO 14
//function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

//}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const idade = prompt(" voce tem mais de 18 anos? sim ou nã0")
const ensinoMedio = prompt("Possui ensimo medio? sim ou não?")
const disponibilidade = prompt("Possue disponibilidade? sim ou não?")

resultado = idade || ensinoMedio || disponibilidade
console.log(resultado)
}*/