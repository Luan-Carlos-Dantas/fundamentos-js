function calculaDistancia(arr){
  let distanciaTotal = 0
  for(rua of arr){
    distanciaTotal += rua.tamanho
  }

  return distanciaTotal
}

let ruas = [
  { nome:'Rua 1', tamanho: 2500 },
  { nome:'Rua 2', tamanho: 3400 },
  { nome:'Rua 3', tamanho: 1400 }
]

console.log(calculaDistancia(ruas))
