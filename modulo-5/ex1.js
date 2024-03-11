function somaFaturamento(arr){
  let total = 0
  for(el of arr){
    total += el
  }

  return total
}

console.log(somaFaturamento([1,2,3,4]))
