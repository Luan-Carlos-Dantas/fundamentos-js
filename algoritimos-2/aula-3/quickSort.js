const listaLivros = require("./array");
const tradePos = require("./find");

function quickSort(arr, left, rigth){
  if(arr.length > 1){
    let indexCurrent = particiona(arr, left, rigth)
    if(left < indexCurrent - 1){
      quickSort(arr, left, indexCurrent-1)
    }
    if(indexCurrent < rigth){
      quickSort(arr, indexCurrent, rigth)
    }
  }

  return arr
}

function particiona(arr, left, rigth){
  let atualEsq = left //0
  let atualDir = rigth //10
  let pivo = arr[Math.floor((left + rigth)/2)]

  while(atualEsq <= atualDir){
    while(arr[atualEsq].preco < pivo.preco){
      atualEsq++
    }
    while(arr[atualDir].preco > pivo.preco){
      atualDir--
    }

    if(atualEsq <= atualDir){
      tradePos(arr, atualEsq, atualDir);
      atualEsq++
      atualDir--
    }
  }

  return atualEsq
}

console.log(quickSort(listaLivros, 0, listaLivros.length-1))
