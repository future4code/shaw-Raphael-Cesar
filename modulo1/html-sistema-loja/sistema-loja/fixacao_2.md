function calculaPrecoTotal(quantidade) {
let condicao1 = quantidade >= 12
let condicao2 = quantidade < 12

  if (condicao1){
      custo = 1 * quantidade
  }else (condicao2){
    custo = 1.3 * quantidade
  }
  return calculaPrecoTotal