function contaOcorrencias(arrayDeNumeros, numeroEscolhido){ 
    let resultado = 0
    
    for (i = 0; i < arrayDeNumeros.lenght; i++){
      if ( arrayDeNumeros[i] === numeroEscolhido){
          resultado++
      }
    }
    return resultado
    }