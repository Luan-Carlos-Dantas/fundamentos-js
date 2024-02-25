const {edGalho, edFolha} = require('./arrays.js')

function juntaListas(arr1,arr2){
  let posicaoAtualLista1 = 0
  let posicaoAtualLista2 = 0
  let atual = 0

  const lista = []

  while((posicaoAtualLista1 < arr1.length && posicaoAtualLista2 < arr2.length)){
    let itemAtualLista1 = arr1[posicaoAtualLista1]
    let itemAtualLista2 = arr2[posicaoAtualLista2]

    if(itemAtualLista1.preco < itemAtualLista2.preco){
      lista[atual] = itemAtualLista1
      posicaoAtualLista1++
    }else{
      lista[atual] = itemAtualLista2
      posicaoAtualLista2++
    }
    atual++
  }

  while(posicaoAtualLista1 < arr1.length){
    let itemAtualLista1 = arr1[posicaoAtualLista1]
    lista[atual] = itemAtualLista1
      posicaoAtualLista1++
      atual++
  }

  while(posicaoAtualLista2 < arr2.length){
    let itemAtualLista2 = arr2[posicaoAtualLista2]
    lista[atual] = itemAtualLista2
    posicaoAtualLista2++
    atual++
  }

  return lista
}

console.log(juntaListas(edFolha, edGalho))
