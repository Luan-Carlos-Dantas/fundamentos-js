const listaLivros = require('./array.js');

function findMinor(pivo, arr){
  let minors = 0;

  for(let current = 0; current < arr.length; current++){
    let productCurrent = arr[current]

    if(productCurrent.preco < pivo.preco){
      minors++
    }

  }

  tradePos(arr,arr.indexOf(pivo), minors)

  return arr
}

function tradePos(arr, from, to){
  const elem1 = arr[from]
  const elem2 = arr[to]

  arr[to] = elem1
  arr[from] = elem2
}

function slicingInPivo(arr){
  let pivo = arr[Math.floor(arr.length/2)]
  let valueMinors = 0
  findMinor(pivo, arr)

  for(let analisando = 0;analisando < arr.length; analisando++ ){
    let current = arr[analisando]
    if(current.preco <= pivo.preco && current !== pivo){
      tradePos(arr, analisando, valueMinors)
      valueMinors++
    }
  }

  return arr
}

console.log(slicingInPivo(listaLivros))
module.exports = tradePos
// console.log(findMinor(listaLivros[2], listaLivros))
