function isListaVazia(arr){
  let iteradorArr = arr[Symbol.iterator]()
  let proximo = iteradorArr.next()
  let done = proximo.done

  return done
}

let listaNumbers = [1,2,3,4,5,6,8]
let listaVazia = []

console.log(isListaVazia(listaNumbers))
console.log(isListaVazia(listaVazia))
