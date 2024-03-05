const listaLivros = require('./array.js')

function mergeSort(arr, level = 0){

    console.log(`Level: ${level}`)

    console.log(`Array: ${arr}`)

    if(arr.length > 1){
      const half = Math.floor(arr.length / 2)
      const slice1 = mergeSort(arr.slice(0, half), level++)
      console.log(slice1)
      const slice2 = mergeSort(arr.slice(half, arr.length), level++)
      console.log(slice2)

      arr = orderBy(slice1,slice2)
    }

  return arr
}


function orderBy(slice1,slice2){
  const arr = []
  let positionActualItem1 = 0
  let positionActualItem2 = 0

  while(positionActualItem1 < slice1.length && positionActualItem2 < slice2.length){
    let itemActual1 = slice1[positionActualItem1]
    let itemActual2 = slice2[positionActualItem2]

    if(itemActual1.preco < itemActual2.preco){
      arr.push(itemActual1)
      positionActualItem1++
    }else{
      arr.push(itemActual2)
      positionActualItem2++
    }
  }

  return arr.concat(positionActualItem1 < slice1.length
    ? slice1.slice(positionActualItem1)
    : slice2.slice(positionActualItem2))
}

console.log(mergeSort(listaLivros))
