// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length
}

// EXERCÍCIO 02 
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado (array){
    function comparaçao (a,b) {
        return a-b
    }
    return array.sort(comparaçao)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let numerosPares = []
  for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
         numerosPares.push (array[i])
    }
  }
  return numerosPares
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  

}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max.apply(Math,array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
const maior = Math.max(num1, num2)
const dividir = Math.max(num1,num2) % Math.min(num1,num2)
const diferença = num1 - num2
const objeto = {
  maiorNumero: maior,
  maiorDivisivelPorMenor: dividir,
  diferença: diferença
}
return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

}
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

} 

