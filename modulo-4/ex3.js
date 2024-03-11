function soletraPalavra(palavra){
  let palavraArr = palavra.split('')
  let iteradorPalavraArr = palavraArr[Symbol.iterator]()
  let proximaLetra = iteradorPalavraArr.next()
  do{
    let letra = proximaLetra.value
    console.log(letra)
    proximaLetra = iteradorPalavraArr.next()
  }
  while(!proximaLetra.done)
}

let palavra = 'luan'

soletraPalavra(palavra)
