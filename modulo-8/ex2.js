function criaMacaroca(arr){
  const macaroca = arr.map(el => `${el}`).join('')

  return macaroca
}

const arrQualquer = [1,5,'a',9,8,4,3,2.56,]

console.log(criaMacaroca(arrQualquer))
