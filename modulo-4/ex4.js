function criaIterador(arr){
  let arrIterador = arr[Symbol.iterator]()
  let proximo = arrIterador.next()
  do{
    console.log(proximo)
    proximo = arrIterador.next()
  }
  while(!proximo.done)
}

function criaIterador2(arr){
  let proxIndex = 0
  return{
    next: function(){
      if(proxIndex < arr.length){
        return{ value: arr[proxIndex++], done: false}
      }else{
        return{ value:undefined, done: true}
      }
    }
  }
}


let listaNumbers = [1,2,3,4,5,6,8]

// criaIterador(listaNumbers)
console.log(criaIterador2(listaNumbers).next())
