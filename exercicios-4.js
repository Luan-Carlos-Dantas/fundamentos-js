// Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.
function saudacao(nome){
  return `Olá ${nome} como vai ?`
}

console.log(saudacao('Luan'))
console.log(`\n`)
// Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.
function eMaior(idade){
  if(idade>= 18){
    return `Maior de idade`
  }else{
    return `Menor de idade`
  }
}

console.log(eMaior(18))
console.log(`\n`)
// Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.
function ePalindromo(palavra){
  let palavraReversa = palavra.split('').reverse().join('')

  console.log(palavra, typeof(palavra))
  console.log(palavraReversa, typeof(palavraReversa))

  if(palavra.toLowerCase() === palavraReversa.toLowerCase()){
    return `A palavra ${palavra} é um palíndromo`
  }else{
    return `A palavra ${palavra} não é um palíndromo`
  }
}

console.log(ePalindromo('tenet'))
console.log(`\n`)
// Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.
function maiorDaLista(n1, n2, n3){
  if((n1>n2&&n1>n3&&n2>n3) || (n1>n2&&n1>n3&&n3>n2)){
    return `O número ${n1} é o maior número`
  }
  else if((n2>n1&&n2>n3&&n1>n3) || (n2>n1&&n2>n3&&n3>n1)){
    return `O número ${n2} é o maior número`
  }
  else if((n3>n1&&n3>n2&&n1>n2) || (n3>n1&&n3>n2&&n2>n1)){
    return `O número ${n3} é o maior número`
  }
}
console.log(maiorDaLista(1,2,3))
console.log(maiorDaLista(4,8,3))
console.log(maiorDaLista(10,6,3))
console.log(`\n`)
// Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.
const calculaPotencia = (n,expoente) =>{
  return Math.pow(n,expoente)
}

console.log(calculaPotencia(2,50))
