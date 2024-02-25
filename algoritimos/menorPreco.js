function menorPreco(arr,initialPos){
  let menorPreco = initialPos

  for(let atual = initialPos ; atual < arr.length; atual++){
    if(arr[atual].preco < arr[menorPreco].preco){
      menorPreco = atual
    }
  }

  return menorPreco
}

module.exports = menorPreco
