function maiorPreco(arr, initialPos){
  let maiorPreco = initialPos

  for(let atual = initialPos ; atual < arr.length; atual++){
    if(arr[atual].preco > arr[maiorPreco].preco){
      maiorPreco = atual
    }
  }

  return maiorPreco
}

module.exports = maiorPreco
