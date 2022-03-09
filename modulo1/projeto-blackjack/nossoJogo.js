/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo blackjack!")
    if( confirm("Se quiser jogar diga ok, se não diga cancelar")) {
    }else{
          console.log("O jogo acabou!")
      }
   
   let usuarioCompra1 = comprarCarta()
   let usuarioCompra2 = comprarCarta()
   let somaDaCompra = usuarioCompra1.valor + usuarioCompra2.valor

let computadorC1 = comprarCarta()
let computadorC2 = comprarCarta()
let somaComputador = computadorC1.valor + computadorC2.valor   


console.log(`Você - cartas: ${usuarioCompra1.texto} ${usuarioCompra2.texto} - pontuação - ${somaDaCompra}`)
console.log(`Você - cartas: ${computadorC1.texto} ${computadorC2.texto} - pontuação - ${somaComputador}`)

if (somaDaCompra > somaComputador){
   console.log("você venceu!")
}   else if (somaComputador > somaDaCompra){
        console.log("Computador venceu!")
}else{
   console.log("deu empate!")
}
   
