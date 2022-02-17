//    Exercícios de interpretação de código


/*
1)

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

 a)  vai imprimir a multiplicaçao com resultado igual a 10 e 50.
 b)  no console nao imprimi nenhum valor 

 2) 

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

 a) ele formata o texto colocando em letra minuscula e determina se um conjunto de caracteres pode ser encontrado dentro
 de outra string, retornando true ou false.

 b) 
 i-  true
 ii- true
 iii- false 


          Exercícios de escrita de código
 
  1) 
  a)

  const texto = "Eu sou Raphael, tenho 33 anos, moro em João Pessoa e sou estudante."

    function dizerOla(texto){
    console.log(texto);
   }

     dizerOla(texto)
  
  b) 

  
    function receberPalavras(nome, idade,cidade,profissao ) {
    const frase = ` Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
    
    return frase
  }

  let nome = prompt("digiti o seu nome")
  let idade = prompt("digite sua idade")
  let cidade = prompt("digite sua cidade")
  let profissao = prompt("digite sua profissão")
  console.log( receberPalavras(nome, idade,cidade,profissao )) 
  
  2) 

  a)
  
  function parametro (valor1, valor2){
    let soma = valor1+valor2
    return soma
    
    }
    const valor1 = prompt(`Digite seu numero 1`)
    const valor2 = prompt(`Digite seu numero 2`)
    
    console.log(parametro(valor1, valor2))

  b)

  function parametro (valor1, valor2){
  let comparacao = valor1 >= valor2
   return comparacao
  }
  
  const valor1 = prompt(`Digite seu numero 1`)
  const valor2 = prompt(`Digite seu numero 2`)
  console.log(parametro(valor1, valor2))  
  
  c)

  function parametro (valor1) {
    const par = (valor1 % 2) < 1
    
    return par
    }
    
    const valor1 = prompt(`Digite seu numero`)
    console.log(parametro(valor1)) 

   d) 

   function receberFrase( frase ) {
    const novoFrase = frase.toUpperCase()
    
    return novoFrase
  }

  let frase = prompt("digiti uma frase ")
  
  console.log( receberFrase(frase).length)
  console.log( receberFrase(frase)) 

// 3)
    const valor1 = prompt(`Digite seu numero 1`)
    const valor2 = prompt(`Digite seu numero 2`)

function parametro1 (valor1, valor2){
    let soma = valor1+valor2
    
    return soma
    
    }
    
    console.log(parametro1(valor1, valor2)) 
    
    function parametro2 (valor1, valor2){
    let multi = valor1*valor2
    
    return multi
    }

    console.log(parametro2(valor1, valor2)) 

    function parametro3 (valor1, valor2){
        let subtracao = valor1-valor2
        
        return subtracao
        }
    
    console.log(parametro3(valor1, valor2))

    function parametro4 (valor1, valor2){
        let divisao = valor1/valor2
        
        return divisao
        }
    
    console.log(parametro4(valor1, valor2)) */